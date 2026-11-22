"""Make natural read-aloud audio for the stories in stories.js.

Uses Kokoro (an open, Apache-licensed neural voice model) through kokoro-onnx, so it runs on any
computer with no account or API key. For each story and voice it writes:
  audio/<voice>/<story-id>.mp3   the story read aloud, one sentence at a time with natural pauses
  audio/<voice>/<story-id>.json  when each word starts and ends, so the app can light it up

Setup (once):
  python3 -m venv .venv && .venv/bin/pip install kokoro-onnx soundfile
  download kokoro-v1.0.onnx and voices-v1.0.bin from
  https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.0 into tools/
  ffmpeg must be installed.
Run:
  .venv/bin/python tools/make_audio.py              # every story, every voice
  .venv/bin/python tools/make_audio.py cake-disaster # just one story
"""
import json, os, re, subprocess, sys, tempfile
import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HERE = os.path.dirname(os.path.abspath(__file__))
# Keep in step with VOICES in index.html
VOICES = {"af_heart": 0.9, "af_bella": 0.9, "bf_emma": 0.9, "am_michael": 0.95}
SR = 24000
STATS = {True: 0, False: 0}

# Same sentence and word splitting as Speaker.render in index.html, so word numbers line up
SENT = re.compile(r"""[^.!?]+(?:[.!?]+["”'’)]*)+\s*|[^.!?]+$""")


def load_stories():
    src = open(os.path.join(ROOT, "stories.js"), encoding="utf-8").read()
    js = src[src.index("["): src.rindex("]") + 1]
    js = re.sub(r"^\s*//.*$", "", js, flags=re.M)
    # stories.js is a JS literal; quote its keys so it parses as JSON
    js = re.sub(r"(?m)([{,]\s*)([A-Za-z_]+):", r'\1"\2":', js)
    js = re.sub(r",(\s*[\]}])", r"\1", js)
    return json.loads(js)


def sentences(text):
    out = []
    paras = [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]
    for p in paras:
        parts = [s.strip() for s in SENT.findall(p) if s.strip()] or [p]
        for i, s in enumerate(parts):
            out.append({"text": s, "words": s.split(), "endPara": i == len(parts) - 1})
    return out


def gap_after(s):
    if s["endPara"]:
        return 0.7
    return 0.42 if re.search(r"""[!?]["”'’)]*$""", s["text"]) else 0.3


def speech_spans(a, min_gap=0.14):
    """Stretches of speech, split where there's a pause of at least min_gap seconds."""
    hop = int(SR * 0.01)
    n = len(a) // hop
    rms = np.array([np.sqrt(np.mean(a[i * hop:(i + 1) * hop] ** 2)) for i in range(n)])
    on = rms > max(rms.max() * 0.03, 1e-4)
    spans, start, quiet = [], None, 0
    for i, v in enumerate(on):
        if v:
            if start is None:
                start = i
            quiet = 0
        elif start is not None:
            quiet += 1
            if quiet * 0.01 >= min_gap:
                spans.append([start * 0.01, (i - quiet + 1) * 0.01])
                start, quiet = None, 0
    if start is not None:
        spans.append([start * 0.01, (n - quiet) * 0.01])
    return spans


def weight(word):
    """Rough spoken length of a word: letters, with digits read as longer."""
    w = re.sub(r"[^A-Za-z0-9']", "", word)
    return max(1.5, len(w) + 3 * sum(c.isdigit() for c in w))


def word_times(sent, a):
    """Spread the words over the speech, lining up comma pauses with the gaps in the audio."""
    words = sent["words"]
    spans = speech_spans(a)
    if not spans:
        return [[0, len(a) / SR]] * len(words)
    # Clauses: break after words ending in , ; : — or a closing quote mid-sentence
    clauses, cur = [], []
    for i, w in enumerate(words):
        cur.append(i)
        if i < len(words) - 1 and re.search(r"""([,;:—-]|[.!?]["”'’)])$""", w):
            clauses.append(cur); cur = []
    clauses.append(cur)
    STATS[len(spans) == len(clauses)] += 1
    if len(spans) != len(clauses):
        # Can't match them up: use one stretch from first sound to last
        spans = [[spans[0][0], spans[-1][1]]]
        clauses = [list(range(len(words)))]
    out = [None] * len(words)
    for (t0, t1), idx in zip(spans, clauses):
        ws = [weight(words[i]) for i in idx]
        tot, t = sum(ws), t0
        for i, w in zip(idx, ws):
            d = (t1 - t0) * w / tot
            out[i] = [round(t, 3), round(t + d, 3)]
            t += d
    return out


def trim(a):
    sp = speech_spans(a)
    if not sp:
        return a
    s, e = max(0, int((sp[0][0] - 0.03) * SR)), min(len(a), int((sp[-1][1] + 0.08) * SR))
    return a[s:e]


def make(k, story, voice, speed):
    sents = sentences(story["text"])
    chunks, times, starts, t = [], [], [], 0.25
    chunks.append(np.zeros(int(SR * 0.25), dtype=np.float32))
    for s in sents:
        a, sr = k.create(s["text"].replace("“", '"').replace("”", '"'), voice=voice, speed=speed, lang="en-us" if voice[0] == "a" else "en-gb")
        assert sr == SR
        a = trim(a.astype(np.float32))
        starts.append(round(t, 3))
        for w in word_times(s, a):
            times.append([round(t + w[0], 3), round(t + w[1], 3)])
        chunks.append(a)
        g = gap_after(s)
        chunks.append(np.zeros(int(SR * g), dtype=np.float32))
        t += len(a) / SR + g
    audio = np.concatenate(chunks)
    out = os.path.join(ROOT, "audio", voice)
    os.makedirs(out, exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".wav") as f:
        sf.write(f.name, audio, SR)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", f.name, "-ac", "1", "-ar", "24000", "-c:a", "libmp3lame", "-b:a", "48k",
                        os.path.join(out, story["id"] + ".mp3")], check=True)
    json.dump({"dur": round(len(audio) / SR, 3), "words": times, "sents": starts},
              open(os.path.join(out, story["id"] + ".json"), "w"), separators=(",", ":"))
    n = sum(len(s["words"]) for s in sents)
    print(f"{voice:11} {story['id']:22} {len(audio) / SR:6.1f}s  {n / (len(audio) / SR / 60):.0f} words/min")


def main():
    k = Kokoro(os.path.join(HERE, "kokoro-v1.0.onnx"), os.path.join(HERE, "voices-v1.0.bin"))
    only = set(sys.argv[1:])
    for story in load_stories():
        if only and story["id"] not in only:
            continue
        for voice, speed in VOICES.items():
            make(k, story, voice, speed)
    print(f"sentences with pauses lined up: {STATS[True]}, spread evenly: {STATS[False]}")


if __name__ == "__main__":
    main()
