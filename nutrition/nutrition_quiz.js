const dietQuizData = [
    {
      question: "How many servings of fruits and vegetables do you eat daily?",
      options: ["None", "1-2 servings", "3-4 servings", "5 or more servings"],
      feedback: {
        "None": "It's important to include fruits and vegetables in your diet for essential vitamins, minerals, and fiber.",
        "1-2 servings": "You're getting some fruits and vegetables, but aim for at least 5 servings per day for optimal nutrition.",
        "3-4 servings": "That's a good start! Aim to include a variety of colorful fruits and vegetables in your meals.",
        "5 or more servings": "Excellent! Eating plenty of fruits and vegetables supports overall health and well-being."
      }
    },
    {
      question: "How often do you consume processed or fast food?",
      options: ["Daily", "Several times a week", "Once a week", "Rarely or never"],
      feedback: {
        "Daily": "High consumption of processed or fast food may increase the risk of various health problems. Consider reducing your intake.",
        "Several times a week": "Frequent consumption of processed or fast food can negatively impact your health. Try to limit these foods.",
        "Once a week": "Moderation is key! Eating fast food occasionally is okay, but try to prioritize whole, unprocessed foods most of the time.",
        "Rarely or never": "That's great! Limiting processed or fast food helps support a nutritious diet and overall health."
      }
    },
    {
      question: "How much water do you drink in a day?",
      options: ["Less than 2 glasses", "2-4 glasses", "5-8 glasses", "More than 8 glasses"],
      feedback: {
        "Less than 2 glasses": "Staying hydrated is important for overall health. Aim to drink more water throughout the day.",
        "2-4 glasses": "You're getting some hydration, but try to increase your water intake for optimal health and well-being.",
        "5-8 glasses": "That's a good amount! Drinking an adequate amount of water helps maintain proper bodily functions.",
        "More than 8 glasses": "Great job! Drinking plenty of water throughout the day is beneficial for overall health and hydration."
      }
    },
    // Add more questions as needed
  ];

let currentQuestion = 0;
let feedbackMessages = [];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

function showQuestion() {
  const currentQuizData = dietQuizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = '';
  currentQuizData.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = selectAnswer;
    optionsElement.appendChild(button);
  });
}

function selectAnswer(event) {
  const selectedOption = event.target.textContent;
  const currentQuizData = dietQuizData[currentQuestion];
  const feedback = currentQuizData.feedback[selectedOption];
  feedbackMessages.push({ option: selectedOption, feedback: feedback });
  //setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < dietQuizData.length) {
    showQuestion();
  } else {
    displayFeedback();
  }
}

function displayFeedback() {
  quizContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Thank you for completing the quiz.</p>
    <h3>Feedback:</h3>
    <ul>
      ${feedbackMessages.map(item => `<li><strong>${item.option}:</strong> ${item.feedback}</li>`).join('')}
    </ul>
  `;
}

showQuestion();
