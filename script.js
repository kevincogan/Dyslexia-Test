const startButton = document.getElementById('start-btn')
const gobackButton = document.getElementById('goback-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex

startButton.addEventListener('click', startGame)
gobackButton.classList.add('hide')
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

gobackButton.addEventListener('click', gobackGame)
nextButton.addEventListener('click', () => {
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  gobackButton.classList.add('hide')
  setNextQuestion()
}

function gobackGame() {
  //restartButton.classList.add('hide')
  if (currentQuestionIndex > 0) {
    currentQuestionIndex = currentQuestionIndex -1
    gobackButton.classList.add('hide')
    startButton.classList.add('hide')

  } else {
    currentQuestionIndex = currentQuestionIndex
  }
  //questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  if (currentQuestionIndex == 4) {
    questionElement.innerText = "You are finished"
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    }else {
      showQuestion(questions[currentQuestionIndex])
      if (currentQuestionIndex > 0) {
        gobackButton.classList.remove('hide')
      }

    }
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//This controls the progrss bar
function nextStep(progressBar) {
    if(currentQuestionIndex == 0) {
        var elem = document.getElementById(progressBar);
        var width = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 25) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width  + "%";
      }
    }
    }
    else if(currentQuestionIndex == 1 ) {
      var elem = document.getElementById(progressBar);
      var width = 25;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 50) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
    }
  }
       }
    else if(currentQuestionIndex == 2 ) {
      var elem = document.getElementById(progressBar);
      var width = 50;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 75) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
    }
  }
       }
    else if(currentQuestionIndex == 3 ) {
      var elem = document.getElementById(progressBar);
      var width = 75;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
    }
  }
       }
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'You are finished!',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  }
]
