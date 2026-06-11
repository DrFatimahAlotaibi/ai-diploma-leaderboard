const diplomaData = {
  currentWeek: "Week 1",
  groups: [
    {
      id: 1,
      name: "The Innovators",
      theme: "Debug Masters",
      members: ["Mohammed Almalke", "Abdulraham Almuhareb", "Nouf Alenzi", "Afnan Alshalahi"],
      scores: { quiz: 7, lab: 0, explanation:0 },
      achievements: ["Clean Code Badge", "3-Week Quiz Streak"]
    },
    {
      id: 2,
      name: "Legends",
      theme: "Model Builders",
      members: ["Yasser Altayari", "Yahya Majrashi", "Waim Alatawi", "Waad Alatawi"],
      scores: { quiz: 9, lab: 0, explanation: 0 },
      achievements: ["Best Explanation", "Resource Helper"]
    },
    {
      id: 3,
      name: "Lama",
      theme: "Data Explorers",
      members: ["Lujain Alrushoud ", "Atheer Almajnoni", "Mohammed Albalawi", "Abdulrahman Alqurashi"],
      scores: { quiz: 10, lab: 31, explanation: 20 },
      achievements: ["Rising Team"]
    },
    {
      id: 4,
      name: "The Geeks",
      theme: "Python Thinkers",
      members: ["Retaj Albogami", "Yazeed Alhifzi", "Ghady Aldabash", "Omar Alanazi"],
      scores: { quiz: 8, lab: 35, explanation: 22 },
      achievements: ["Mini Lab Star", "Debug Hero"]
    },
    {
      id: 5,
      name: "Engs",
      theme: "AI Innovators",
      members: ["Osama Alhasson", "Jawaher Alyami", "Hussam Almozaini", "Layan Alshedokhi"],
      scores: { quiz: 10, lab: 29, explanation: 21 },
      achievements: ["Creative Thinkers"]
    },
    {
      id: 6,
      name: "The mean team",
      theme: "Logic Learners",
      members: ["Leen Alaslani", "Nawal Alkhilifah", "Salman Alsheheri", "Saleh Almahmood"],
      scores: { quiz: 10, lab: 28, explanation: 19 },
      achievements: ["Teamwork Badge"]
    }
  ],
  submissionLinks: {
    resourceForm: "https://docs.google.com/forms/d/1wDy2sSrcqQsPguatNNmMevoPsBV6WGd_GXUZtITPQuI/viewform",
    resourceVoteForm: "https://docs.google.com/forms/d/1x28DXxuLa7af6hLy2KBZ9rE9Xmu1VHoVWKsqCE9SwCo/viewform",
    explanationForm: "https://docs.google.com/forms/d/1sK5-I1jKSi8ZGJdX5eoj8BA9N4LIpWr4iJ_qtAXrEyY/viewform",
    aiWordForm: "https://docs.google.com/forms/d/1rdMkkX5KhaCJEdXt7n5ZOldLUpYhbEa9uaUsMR1dh0Q/viewform"
  },
  bestResource: {
    week: "Week 1",
    title: "Conditional Probability Visualizer",
    group: "Group 1",
    note: "Selected as the most helpful beginner-friendly resource for this week."
  },
  resources: [
    {
      week: "Week 1",
      topic: "Probability",
      group: "Group 1",
      type: "Visualization",
      title: "Conditional Probability Visualizer",
      link: "#",
      useful: "Helps students see how the sample space changes when we say given or بشرط.",
      difficulty: "Easy"
    },
    {
      week: "Week 1",
      topic: "Python",
      group: "Group 2",
      type: "Colab",
      title: "Simple Dice Simulation",
      link: "#",
      useful: "Shows how random experiments can be repeated many times using Python.",
      difficulty: "Easy"
    },
    {
      week: "Week 1",
      topic: "Math Concept",
      group: "Group 3",
      type: "Video",
      title: "Probability in 5 Minutes",
      link: "#",
      useful: "Short beginner-friendly explanation with everyday examples.",
      difficulty: "Easy"
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
