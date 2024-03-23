const quizData = [
  {
    question: "How many hours of sleep do you usually get on weekdays?",
    options: ["Less than 4 hours", "4-6 hours", "6-8 hours", "More than 8 hours"],
    feedback: {
      "Less than 4 hours": "It's recommended to get more sleep to maintain good health and cognitive function.",
      "4-6 hours": "You're getting some sleep, but aim for at least 7-9 hours for optimal health.",
      "6-8 hours": "That's a good amount of sleep! Most adults need between 7-9 hours of sleep per night.",
      "More than 8 hours": "While too much sleep can also have negative effects, it's great that you're prioritizing rest."
    }
  },
  {
    question: "Do you have a consistent sleep schedule (e.g., going to bed and waking up at the same time every day)?", 
    options: ["Yes, I have a consistent schedule", "No, my schedule varies"],
    feedback: {
      "Yes, I have a consistent schedule": "Maintaining a regular sleep schedule can improve sleep quality and overall well-being.",
      "No, my schedule varies": "Having a consistent sleep schedule can help regulate your body's internal clock and improve sleep quality."
    }
  },
  {
    question: "Do you often experience difficulty falling asleep or staying asleep throughout the night?",
    options: ["Yes, frequently", "Occasionally", "Rarely", "Never"],
    feedback: {
      "Yes, frequently": "Having trouble falling asleep or staying asleep may indicate an underlying sleep disorder. Consider consulting a healthcare professional.",
      "Occasionally": "Occasional difficulty sleeping is normal, but if it becomes frequent, it may be worth discussing with a healthcare provider.",
      "Rarely": "Experiencing occasional difficulty sleeping is common, but it's important to address any ongoing issues to maintain good sleep hygiene.",
      "Never": "That's great! Consistently falling asleep easily and staying asleep throughout the night indicates good sleep quality."
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
  const currentQuizData = quizData[currentQuestion];
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
  const currentQuizData = quizData[currentQuestion];
  const feedback = currentQuizData.feedback[selectedOption];
  feedbackMessages.push({ option: selectedOption, feedback: feedback });
  //setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
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
