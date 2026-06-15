const diplomaData = {
  currentWeek: "Week 1",
  courseTitle: "Mathematics, Linear Algebra and Probability for AI and Machine Learning",
  year: "2026",
  instructors: "Dr. Fatimah Alotaibi and Ms. Banan Alnemeri",

  groups: [
    {
      id: 1,
      name: "The Innovators",
      members: ["Mohammed Almalke", "Abdulraham Almuhareb", "Nouf Alenzi", "Afnan Alshalahi"],
      scores: { quiz: 7, lab: 0, explanation: 0 },
      badges: ["Clean Code Badge", "3-Week Quiz Streak"]
    },
    {
      id: 2,
      name: "The Legends",
      members: ["Yasser Altayari", "Yahya Majrashi", "Waim Alatawi", "Waad Alatawi"],
      scores: { quiz: 9, lab: 0, explanation: 0 },
      badges: ["Best Explanation", "Resource Helper"]
    },
    {
      id: 3,
      name: "LAMA",
      members: ["Lujain Alrushoud", "Atheer Almajnoni", "Mohammed Albalawi", "Abdulrahman Alqurashi"],
      scores: { quiz: 10, lab: 31, explanation: 20 },
      badges: ["Rising Team"]
    },
    {
      id: 4,
      name: "The Geeks",
      members: ["Retaj Albogami", "Yazeed Alhifzi", "Ghady Aldabash", "Omar Alanazi"],
      scores: { quiz: 8, lab: 35, explanation: 22 },
      badges: ["Mini Lab Star", "Debug Hero"]
    },
    {
      id: 5,
      name: "Engs",
      members: ["Osama Alhasson", "Jawaher Alyami", "Hussam Almozaini", "Layan Alshedokhi"],
      scores: { quiz: 10, lab: 29, explanation: 21 },
      badges: ["Creative Thinkers"]
    },
    {
      id: 6,
      name: "The mean Team",
      members: ["Leen Alaslani", "Nawal Alkhilifah", "Salman Alsheheri", "Saleh Almahmood"],
      scores: { quiz: 10, lab: 28, explanation: 19 },
      badges: ["Teamwork Badge"]
    }
  ],

  submissionLinks: {
    resourceForm: "https://docs.google.com/forms/d/1wDy2sSrcqQsPguatNNmMevoPsBV6WGd_GXUZtITPQuI/viewform",
    resourceVoteForm: "https://docs.google.com/forms/d/1x28DXxuLa7af6hLy2KBZ9rE9Xmu1VHoVWKsqCE9SwCo/viewform",
    explanationForm: "https://docs.google.com/forms/d/1sK5-I1jKSi8ZGJdX5eoj8BA9N4LIpWr4iJ_qtAXrEyY/viewform",
    aiWordForm: "https://docs.google.com/forms/d/1rdMkkX5KhaCJEdXt7n5ZOldLUpYhbEa9uaUsMR1dh0Q/viewform",
    aiExpertForm: "#"
  },

  bestResource: {
    title: "Conditional Probability Visualizer",
    group: "Debug Masters",
    note: "Selected as the most helpful beginner-friendly resource."
  },

  currentCourseResources: [
    {
      title: "Conditional Probability Visualizer",
      group: "Debug Masters",
      link: "#"
    },
    {
      title: "Simple Dice Simulation",
      group: "Model Builders",
      link: "#"
    },
    {
      title: "Probability in 5 Minutes",
      group: "Data Explorers",
      link: "#"
    }
  ],

  generalAIResources: [
    {
      title: "Google Machine Learning Crash Course",
      group: "AI Innovators",
      link: "https://developers.google.com/machine-learning/crash-course"
    },
    {
      title: "Teachable Machine by Google",
      group: "Python Thinkers",
      link: "https://teachablemachine.withgoogle.com/"
    },
    {
      title: "Elements of AI",
      group: "Logic Learners",
      link: "https://www.elementsofai.com/"
    }
  ],

  explanations: [
    {
      title: "Conditional Probability",
      group: "Model Builders",
      text: "Conditional probability means we calculate the probability after we already know some information. The sample space becomes smaller because we only look at cases that satisfy the condition."
    },
    {
      title: "Why Matrix Shape Matters",
      group: "Python Thinkers",
      text: "Matrix multiplication works only when the inside dimensions match. This means the columns of the first matrix must equal the rows of the second matrix."
    }
  ],

  wordOfWeek: {
    word: "Feature",
    arabic: "خاصية أو متغير يستخدمه النموذج للتعلم",
    meaning: "A feature is an input value that helps the model make a prediction.",
    example: "If we predict house price, features can be size, location, and number of rooms."
  },

  aiExperts: [
    {
      name: "Geoffrey Hinton",
      role: "AI researcher",
      knownFor: "Deep learning and neural networks",
      group: "Data Explorers"
    },
    {
      name: "Fei-Fei Li",
      role: "AI researcher and educator",
      knownFor: "Computer vision and ImageNet",
      group: "AI Innovators"
    },
    {
      name: "Andrew Ng",
      role: "AI educator and entrepreneur",
      knownFor: "Making machine learning education accessible",
      group: "Model Builders"
    }
  ],

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
      text: "Each group can submit helpful learning resources for the course or general AI."
    }
  ]
};
