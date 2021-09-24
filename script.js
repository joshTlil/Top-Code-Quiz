const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const timerElement = document.querySelector(".timer-count");

let currentQuestion = {};
let acceptingAnswers = true;
let timerCount;
let timer;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
      "question": "2+2",
      "choice1": "4",
      "choice2": "5",
      "choice3": "22",
      "choice4": "0",
      "answer": 1
    },
    {
      "question": "What is my name",
      "choice1": "hi",
      "choice2": "John",
      "choice3": "Joshua",
      "choice4": "Bill",
      "answer": 3
    },
    {
      "question": " How old am i",
      "choice1": "25",
      "choice2": "30",
      "choice3": "17",
      "choice4": "20",
      "answer": 4
    }
  ]

  const MAX_QUESTIONS = 3;
  


       
    startGame = () => {
      timerCount = 20;
      questionCounter = 0;
      availableQuestions = [...questions];
      console.log(availableQuestions);
      getNewQuestion();

  }


getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice'+ number];
        
        
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

    
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        getNewQuestion();

        
    });
});



console.log(acceptingAnswers)



startGame();




