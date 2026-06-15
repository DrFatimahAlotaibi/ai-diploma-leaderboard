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
      scores: { quiz: 7, lab: 10, explanation: 0 },
      badges: ["Clean Code Badge", "3-Week Quiz Streak"]
    },
    {
      id: 2,
      name: "The Legends",
      members: ["Yasser Altayari", "Yahya Majrashi", "Waim Alatawi", "Waad Alatawi"],
      scores: { quiz: 9, lab: 10, explanation: 0 },
      badges: ["Best Explanation", "Resource Helper"]
    },
    {
      id: 3,
      name: "LAMA",
      members: ["Lujain Alrushoud", "Atheer Almajnoni", "Mohammed Albalawi", "Abdulrahman Alqurashi"],
      scores: { quiz: 10, lab: 10, explanation: 0 },
      badges: ["Rising Team"]
    },
    {
      id: 4,
      name: "The Geeks",
      members: ["Retaj Albogami", "Yazeed Alhifzi", "Ghady Aldabash", "Omar Alanazi"],
      scores: { quiz: 8, lab: 10, explanation: 0 },
      badges: ["Mini Lab Star", "Debug Hero"]
    },
    {
      id: 5,
      name: "Engs",
      members: ["Osama Alhasson", "Jawaher Alyami", "Hussam Almozaini", "Layan Alshedokhi"],
      scores: { quiz: 10, lab: 10, explanation: 0 },
      badges: ["Creative Thinkers"]
    },
    {
      id: 6,
      name: "The mean Team",
      members: ["Leen Alaslani", "Nawal Alkhilifah", "Salman Alsheheri", "Saleh Almahmood"],
      scores: { quiz: 10, lab: 10, explanation: 0 },
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
      title: "Stanford CS229: Machine Learning Full Course taught by Andrew Ng | Autumn 2018",
      group: "The mean team",
      link: "https://youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU&si=JwUuRWsjzOISK5a1"
    },
    {
      title: "Tinker With a Neural Network",
      group: "Engs",
      link: "https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.10677&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false"
    },
  ],

  explanations: [
    {
      title: "Different between Poisson method ",
      group: "LAMA",
      text: `- PMF (Probability Mass Function):
Example: What is the probability of receiving exactly 3 emails in one hour?
Use .pmf
Exactly → PMF

- CDF (Cumulative Distribution Function):
Example: What is the probability of receiving 3 or fewer emails in one hour?
Use .cdf
Fewer / at most → CDF

- SF (Survival Function):
Example: What is the probability of receiving more than 3 emails in one hour?
Use .sf
More than → SF
  `
    },
    {
      title: "Data Imbalance",
      group: "Legends",
      text: "Data Imbalance happens when one class has much more data than another class Data imbalance is important in AI because the model may learn the majority class too well and ignore the minority class. This can give us high accuracy, but the model may actually perform badly.For imbalance data problems we should not depend only on accuracy. Instead we should use evaluation metrics such as Recall ,Precision and F1-Score because they show how well the model performs on the important class, not just the overall accuracy"
    }
  ],

  wordOfWeek: {
    word: "علام",
    arabic: "اول نموذج ذكاء اصطناعي سعودي متقدم طور بالكامل بواسطة فريق سعودي تحت مضلة هيئة الذكاء الاصطناعي سدايا ",
    meaning: "The first advanced Saudi artificial intelligence model, developed entirely locally, is specifically designed to understand the cultural and linguistic context of the region and to speak in different Arabic dialects.",
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
