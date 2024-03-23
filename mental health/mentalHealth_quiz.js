const mentalHealthQuizData = [
    {
      question: "How do you typically manage stress?",
      options: ["Ignoring it and hoping it goes away", "Engaging in physical activity", "Talking to friends or family", "Practicing mindfulness or meditation"],
      feedback: {
        "Ignoring it and hoping it goes away": "Ignoring stress can lead to negative impacts on mental and physical health. It's important to find healthy ways to cope.",
        "Engaging in physical activity": "Exercise is a great way to reduce stress and improve mood. Keep up the good work!",
        "Talking to friends or family": "Connecting with others and sharing your feelings can help alleviate stress and provide support.",
        "Practicing mindfulness or meditation": "Mindfulness and meditation techniques can be effective for managing stress and promoting mental well-being."
      }
    },
    {
      question: "How do you prioritize self-care in your daily routine?",
      options: ["I don't prioritize self-care", "I make time for myself occasionally", "I try to practice self-care regularly", "Self-care is a top priority for me"],
      feedback: {
        "I don't prioritize self-care": "Self-care is essential for mental health and well-being. Consider incorporating small self-care practices into your routine.",
        "I make time for myself occasionally": "It's good to carve out time for yourself, but try to make self-care a consistent part of your routine.",
        "I try to practice self-care regularly": "Consistent self-care habits can have a positive impact on mental health. Keep up the effort!",
        "Self-care is a top priority for me": "Prioritizing self-care demonstrates a commitment to your mental health and overall well-being. Well done!"
      }
    },
    {
      question: "How do you cope with difficult emotions?",
      options: ["Avoiding them", "Expressing them through creative outlets", "Seeking professional help", "Using healthy coping strategies such as journaling or deep breathing"],
      feedback: {
        "Avoiding them": "Avoiding difficult emotions can lead to increased stress and mental health issues. Consider healthier ways to cope.",
        "Expressing them through creative outlets": "Creative expression can be a constructive way to process and manage difficult emotions.",
        "Seeking professional help": "It's important to seek support when needed. A mental health professional can provide guidance and assistance.",
        "Using healthy coping strategies such as journaling or deep breathing": "Healthy coping strategies can help you navigate difficult emotions and build resilience."
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
    const currentQuizData = mentalHealthQuizData[currentQuestion];
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
    const currentQuizData = mentalHealthQuizData[currentQuestion];
    const feedback = currentQuizData.feedback[selectedOption];
    feedbackMessages.push({ option: selectedOption, feedback: feedback });
    //setTimeout(nextQuestion, 2000);
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < mentalHealthQuizData.length) {
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
  