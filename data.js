const diplomaData = {
  currentWeek: "Week 1",
  groups: [
    {
      id: 1,
      name: "Group 1",
      theme: "Debug Masters",
      members: ["Boy 1", "Boy 2", "Girl 1", "Girl 2"],
      scores: { quiz: 38, lab: 34, explanation: 23 },
      achievements: ["Clean Code Badge", "3-Week Quiz Streak"]
    },
    {
      id: 2,
      name: "Group 2",
      theme: "Model Builders",
      members: ["Boy 1", "Boy 2", "Girl 1", "Girl 2"],
      scores: { quiz: 35, lab: 33, explanation: 24 },
      achievements: ["Best Explanation", "Resource Helper"]
    },
    {
      id: 3,
      name: "Group 3",
      theme: "Data Explorers",
      members: ["Boy 1", "Boy 2", "Girl 1", "Girl 2"],
      scores: { quiz: 32, lab: 31, explanation: 20 },
      achievements: ["Rising Team"]
    },
    {
      id: 4,
      name: "Group 4",
      theme: "Python Thinkers",
      members: ["Boy 1", "Boy 2", "Girl 1", "Girl 2"],
      scores: { quiz: 30, lab: 35, explanation: 22 },
      achievements: ["Mini Lab Star", "Debug Hero"]
    },
    {
      id: 5,
      name: "Group 5",
      theme: "AI Innovators",
      members: ["Boy 1", "Boy 2", "Girl 1", "Girl 2"],
      scores: { quiz: 28, lab: 29, explanation: 21 },
      achievements: ["Creative Thinkers"]
    },
    {
      id: 6,
      name: "Group 6",
      theme: "Logic Learners",
      members: ["Boy 1", "Boy 2", "Girl 1", "Girl 2"],
      scores: { quiz: 34, lab: 28, explanation: 19 },
      achievements: ["Teamwork Badge"]
    }
  ],
  learningWeek: {
    week: "Week 1",
    title: "Probability + Python Practice",
    concepts: ["Sample space", "Events", "Conditional probability", "Simple Python simulation"],
    miniLab: "Simulate coin flips or dice rolls in Python and compare the result with the theoretical probability.",
    codeFocus: "Use variables, loops, counters, and simple visualization.",
    commonMistake: "Confusing AND with OR in probability questions."
  },
  resources: [
    {
      week: "Week 1",
      topic: "Probability",
      group: "Group 1",
      type: "Visualization",
      title: "Conditional Probability Visualizer",
      link: "#",
      useful: "Helps students see how the sample space changes when we say given or بشرط."
    },
    {
      week: "Week 1",
      topic: "Python",
      group: "Group 2",
      type: "Colab",
      title: "Simple Dice Simulation",
      link: "#",
      useful: "Shows how random experiments can be repeated many times using Python."
    },
    {
      week: "Week 1",
      topic: "Math Concept",
      group: "Group 3",
      type: "Video",
      title: "Probability in 5 Minutes",
      link: "#",
      useful: "Short beginner-friendly explanation with everyday examples."
    }
  ],
  explanations: [
    {
      title: "Conditional Probability",
      group: "Group 2",
      text: "Conditional probability means we calculate the probability after we already know some information. The sample space becomes smaller because we only look at cases that satisfy the condition."
    },
    {
      title: "Why Matrix Shape Matters",
      group: "Group 4",
      text: "Matrix multiplication works only when the inside dimensions match. This means the columns of the first matrix must equal the rows of the second matrix."
    }
  ],
  wordOfWeek: {
    word: "Feature",
    arabic: "خاصية أو متغير يستخدمه النموذج للتعلم",
    meaning: "A feature is an input value that helps the model make a prediction.",
    example: "If we predict house price, features can be size, location, and number of rooms."
  },
  announcements: [
    {
      title: "Next class reminder",
      text: "Bring your laptop and make sure Google Colab is working before class."
    },
    {
      title: "Explanation rule",
      text: "One student from each group may be randomly selected to explain part of the code."
    },
    {
      title: "Resource Wall",
      text: "Each group can submit one helpful learning resource for the weekly topic."
    }
  ]
};
