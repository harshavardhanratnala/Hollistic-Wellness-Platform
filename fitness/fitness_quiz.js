const fitnessQuizData = [
    {
      question: "How often do you engage in cardiovascular exercise?",
      options: ["Never", "Once or twice a week", "Three to four times a week", "Five or more times a week"],
      feedback: {
        "Never": "Regular cardiovascular exercise is important for heart health and overall fitness. Consider incorporating it into your routine.",
        "Once or twice a week": "It's good that you're incorporating some cardiovascular exercise, but aim for more frequent sessions for optimal health.",
        "Three to four times a week": "That's a good frequency! Regular cardiovascular exercise helps improve endurance and maintain heart health.",
        "Five or more times a week": "Excellent job! Regular cardiovascular exercise is key to maintaining overall fitness and well-being."
      }
    },
    {
      question: "How often do you engage in strength training or resistance exercises?",
      options: ["Never", "Once or twice a week", "Three to four times a week", "Five or more times a week"],
      feedback: {
        "Never": "Strength training is important for building muscle mass and strength, as well as supporting bone health. Consider incorporating it into your routine.",
        "Once or twice a week": "It's good that you're incorporating some strength training, but aim for more frequent sessions to see greater benefits.",
        "Three to four times a week": "That's a good frequency! Regular strength training helps build muscle and improve overall fitness.",
        "Five or more times a week": "Fantastic! Regular strength training sessions contribute to improved muscle tone, strength, and overall fitness."
      }
    },
    {
      question: "How do you incorporate flexibility and mobility exercises into your routine?",
      options: ["I don't", "Occasionally, when I remember", "Regularly, at least once a week", "Consistently, several times a week"],
      feedback: {
        "I don't": "Flexibility and mobility exercises help prevent injury and improve range of motion. Consider adding them to your routine.",
        "Occasionally, when I remember": "It's good that you're incorporating flexibility exercises occasionally, but aim for more consistent practice for better results.",
        "Regularly, at least once a week": "That's a good start! Regular flexibility and mobility exercises can improve joint health and movement.",
        "Consistently, several times a week": "Great job! Consistent flexibility and mobility exercises contribute to overall fitness and well-being."
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
    const currentQuizData = fitnessQuizData[currentQuestion];
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
    const currentQuizData = fitnessQuizData[currentQuestion];
    const feedback = currentQuizData.feedback[selectedOption];
    feedbackMessages.push({ option: selectedOption, feedback: feedback });
    //setTimeout(nextQuestion, 2000);
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < fitnessQuizData.length) {
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
  