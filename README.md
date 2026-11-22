# Reading Practice

Read-aloud practice and comprehension questions for Ella's 5th grade reading homework, built in the same style as the [Math Facts Trainer](https://github.com/khainguyen24/math-facts). The whole app is `index.html` plus the stories in `stories.js`, and it runs in any browser with no install.

**Open it:** https://khainguyen24.github.io/Reading-App/ (after GitHub Pages is turned on, see below)

On an iPad, open the link in Safari, tap Share › Add to Home Screen, and it opens like an app. Progress is saved on that device.

## How it works
- Pick a story and tap **Start reading**. The screen clears to just the story in a large, easy-to-read font. There is no clock, timer or menu on screen while she reads.
- The timer runs quietly in the background. When she taps **I'm done reading** at the end of the story, the time is saved for today, like the "Record how long it takes you each day" box on the worksheet (in the same 1:09.09 format).
- After reading she sees her time, words per minute, and whether she beat her last or best time. From there, **Go to questions**.
- **Listen to the story** plays a natural recording of the story, and each word lights up blue as it's spoken. Tapping a sentence jumps there; Pause, Start over and Back are always on screen. Four voices: Heart (warm American woman, the default), Bella (American woman), Emma (British woman) and Michael (American man), at Slower / Normal / Faster. Listening isn't timed.
  - The recordings are made with [Kokoro](https://github.com/hexgrad/kokoro), an open neural voice model, by `tools/make_audio.py`. They live in `audio/` and work offline, on every device, with no account or API key. After adding a story to `stories.js`, run the script for it (instructions at the top of the file).
  - Stories added in the app with "Add a story" have no recording yet, so they use the best natural voice on the device (robotic and novelty voices are hidden).
- **⚡ FlowRead** is a simpler version of the FlowRead speed reader: one word at a time in the same spot, with the focus letter in red, short pauses at commas and longer ones at the end of sentences. Tap or press Space to play and pause; ⏮ ⏭ jump by sentence; − and + change the speed (75 to 500 words a minute, 150 to start). When paused, the sentence shows underneath; **Show the whole story** opens the full story with words already read dimmed, the current sentence bright and the current word underlined in red, following along as it plays. Tapping any word starts from there. The fastest finished speed for each story is saved.
- **Questions** has the worksheet boxes (Inferring, Figurative language, Connecting, Visualizing and so on) and the Literal, Inferential and Applied questions. Answers save as she types. "Show the story" puts the passage beside the questions so she can look back for evidence. Visualizing questions have a drawing box.
- **Progress**: a Monday to Sunday strip of each day's time per story, every read with words per minute, and an overview with streak, total reading time and questions answered.
- **Players**, each with their own times and answers.
- **Add a story** to type in new passages and questions from school. "Mark as this week's story" puts the current homework at the top.
- **‹ Back** in the top corner leaves any reading screen (or press Escape). While she's being timed it's dimmed, and leaving doesn't save a time.

## Stories
The eight stories in `stories.js` are typed from `Ella_reading_assignment_samples_5th_grade.pdf`: Learning to Fly, The Cake Disaster, Dancing Dilemma, The Escapee, A Lesson from China, Never Trust a Tiger, The Plane Crash and Don't Pat the Spider!

## Turning on GitHub Pages
Settings › Pages › Build and deployment › Deploy from a branch › `main` / root. After that, pushing to `main` republishes it in a minute or two.
