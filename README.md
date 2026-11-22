# Reading Practice

Read-aloud practice and comprehension questions for Ella's 5th grade reading homework, built in the same style as the [Math Facts Trainer](https://github.com/khainguyen24/math-facts). The whole app is `index.html` plus the stories in `stories.js`, and it runs in any browser with no install.

**Open it:** https://khainguyen24.github.io/Reading-App/ (after GitHub Pages is turned on, see below)

On an iPad, open the link in Safari, tap Share › Add to Home Screen, and it opens like an app. Progress is saved on that device.

## How it works
- Pick a story and tap **Start reading**. The screen clears to just the story in a large, easy-to-read font. There is no clock, timer or menu on screen while she reads.
- The timer runs quietly in the background. When she taps **I'm done reading** at the end of the story, the time is saved for today, like the "Record how long it takes you each day" box on the worksheet (in the same 1:09.09 format).
- After reading she sees her time, words per minute, and whether she beat her last or best time. From there, **Go to questions**.
- **Questions** has the worksheet boxes (Inferring, Figurative language, Connecting, Visualizing and so on) and the Literal, Inferential and Applied questions. Answers save as she types. "Show the story" puts the passage beside the questions so she can look back for evidence. Visualizing questions have a drawing box.
- **Progress**: a Monday to Sunday strip of each day's time per story, every read with words per minute, and an overview with streak, total reading time and questions answered.
- **Players**, each with their own times and answers.
- **Add a story** to type in new passages and questions from school. "Mark as this week's story" puts the current homework at the top.
- A faint × in the top corner while reading leaves without saving (or press Escape).

## Stories
The eight stories in `stories.js` are typed from `Ella_reading_assignment_samples_5th_grade.pdf`: Learning to Fly, The Cake Disaster, Dancing Dilemma, The Escapee, A Lesson from China, Never Trust a Tiger, The Plane Crash and Don't Pat the Spider!

## Turning on GitHub Pages
Settings › Pages › Build and deployment › Deploy from a branch › `main` / root. After that, pushing to `main` republishes it in a minute or two.
