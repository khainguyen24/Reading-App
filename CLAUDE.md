# Reading Practice app

Read-aloud practice for Ella's 5th grade reading homework. Static site on GitHub Pages
(https://khainguyen24.github.io/Reading-App/), no build step:

- `index.html`: the whole app (styles, screens, logic). Saves to localStorage under `reading:v1:*`.
- `stories.js`: the built-in stories and their questions.
- `audio/<voice>/<story-id>.mp3` + `.json`: natural read-aloud recordings plus the start/end time of every word.
- `tools/make_audio.py`: makes those recordings with Kokoro (open neural voice, runs locally, no API key).

Same look and conventions as Khai's Math Facts app (github.com/khainguyen24/math-facts).

## Adding new homework stories

Khai sends a worksheet (photo, scan or PDF). Each worksheet has two pages:
1. **Front:** title, passage, three boxed prompts (e.g. INFERRING, FIGURATIVE LANGUAGE, CONNECTING,
   PREDICTING, MAIN IDEA, QUESTIONING, SUMMARIZING, VISUALIZING), and a "Read the entire passage
   aloud. Record how long it takes you each day" box (the app handles that with Start reading).
2. **Back:** "Make sure to restate the question!", then LITERAL (4), INFERENTIAL (3), APPLIED (3).

Steps:
1. **Transcribe exactly.** Scans have no text layer: render pages with `pdftoppm -r 70 -png` and read
   them. Keep the author's wording, punctuation and spelling (e.g. "aide" in Never Trust a Tiger). Ignore
   anything Ella wrote by hand.
2. **Add an entry to `stories.js`** in the same shape as the others:
   - `id`: kebab-case of the title, unique. Don't rename an existing id: saved times, answers and the
     audio file names are keyed by it.
   - `title`: title case.
   - `text`: the passage as one string. Use `\n\n` only where the worksheet really starts a new paragraph.
   - `think`: the three front boxes as `{ tag, q }`. Tag in sentence case ("Figurative language").
     Add `kind: "list3"` for "write down three…" / "three dot points", `kind: "draw"` for "draw a picture".
   - `literal`, `inferential`, `applied`: arrays of question strings, without the numbers.
3. **Make the recordings:**
   ```bash
   python3 -m venv /tmp/kvenv && /tmp/kvenv/bin/pip install -q kokoro-onnx soundfile
   # model files: from GitHub releases (huggingface.co may be blocked by the network proxy)
   curl -sSLo tools/kokoro-v1.0.onnx https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/kokoro-v1.0.onnx
   curl -sSLo tools/voices-v1.0.bin https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/voices-v1.0.bin
   /tmp/kvenv/bin/python tools/make_audio.py <story-id> [<story-id> …]
   ```
   About 30 seconds per voice per story on 4 CPUs. It prints words/min per voice; 155 to 180 is normal.
   The model files are gitignored. Never commit them (325 MB).
   If the passage text of an existing story changes, re-run the script for that story. The word times
   are matched to the app by word position, so text and audio must match.
4. **Check it** in a browser served over HTTP with Range support (seeking the mp3 fails on
   `python -m http.server`): open the story, tap Listen, and confirm the blue word tracks the audio and
   tapping a sentence jumps there. Check the question count on the story page (normally 13).
5. **Commit** `stories.js` and the new `audio/*/<story-id>.*` files on a branch and open a PR. Merging to
   `main` publishes it. Mention that the newest story can be pinned with "Mark as this week's story".

Stories typed in the app with "Add a story" live only in that browser and use the device's voice.
To make one permanent with natural audio, add it to `stories.js` as above.

## Voices

`VOICES` in `tools/make_audio.py` and `REC` in `index.html` must list the same voices:
af_heart (Heart, default), af_bella (Bella), bf_emma (Emma, British), am_michael (Michael).
Adding a voice means adding it to both and re-running the script for every story.

## Requirements Khai set (keep them)

- While she's reading for time, nothing on screen but the story: no timer or clock, and only a dim Back.
- The timer runs in the background. Times show in the worksheet's `1:09.09` format.
- Questions button on every story; answers save as she types.
- Read-aloud sounds natural, and each word lights up blue as it's spoken.
- FlowRead is a simplified version of Khai's speed-reader (github.com/khainguyen24/speed-reader).
