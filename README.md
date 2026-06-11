# AI Diploma Learning Hub

A GitHub Pages website for an AI Diploma class.

## Main sections

- Leaderboard
- Resource Wall
- Best Explanation Gallery
- AI Word of the Week
- Group Cards & Achievements
- Announcements

## How to update scores

Open `data.js` and edit each group score:

```js
scores: { quiz: 38, lab: 34, explanation: 23 }
```

## How to add student submission forms

Create Google Forms for:

1. Resource submission
2. Resource voting
3. Explanation submission
4. AI Word suggestion

Then paste the form links inside `data.js`:

```js
submissionLinks: {
  resourceForm: "YOUR_RESOURCE_FORM_LINK",
  resourceVoteForm: "YOUR_VOTE_FORM_LINK",
  explanationForm: "YOUR_EXPLANATION_FORM_LINK",
  aiWordForm: "YOUR_AI_WORD_FORM_LINK"
}
```

## How to show the best submissions

After reviewing form responses or votes, edit these sections in `data.js`:

- `bestResource`
- `resources`
- `explanations`
- `wordOfWeek`

Commit changes on GitHub and wait 1–2 minutes for the live website to update.
