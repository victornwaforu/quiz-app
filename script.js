const quizData = [
  {
    question: "How old is Victor?",
    a: "17",
    b: "29",
    c: "34",
    d: "40",
    correct: "b",
  },
  {
    question: "What is the most used programming language in 2022?",
    a: "Java",
    b: "C",
    c: "Phyton",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "Who is the President of the Unites States of America?",
    a: "Victor Nwafor",
    b: "Donald Trump",
    c: "Barrack Obama",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "What does HTML stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lambroginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
  {
    question: "Which is the highest mountain in the world?",
    a: "Mount Everest",
    b: "Lhotse",
    c: "K2",
    d: "Makalu",
    correct: "a",
  },
  {
    question: "What is the capital of Nigeria?",
    a: "Lagos",
    b: "Onitsha",
    c: "Abuja",
    d: "Kaduna",
    correct: "c",
  },
  {
    question: "How many elements are in the periodic table?",
    a: "201",
    b: "118",
    c: "85",
    d: "non of the above",
    correct: "b",
  },
  {
    question: "What is the world's fastest bird? ",
    a: "Eagle",
    b: "vulture",
    c: "Peregrine Falcon",
    d: "Dove",
    correct: "c",
  },
  {
    question: "How many bones do we have in an ear?",
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    correct: "c",
  },
  {
    question: "Which planet has the most moons?",
    a: "Saturn",
    b: "Venus",
    c: "Mars",
    d: "Earth",
    correct: "a",
  },
  {
    question: "What is the 4th letter of the Greek alphabet?",
    a: "Alpha",
    b: "Beta",
    c: "Charlie",
    d: "Delta",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const aEl = document.querySelector("label[for='a']");
const bEl = document.querySelector("label[for='b']");
const cEl = document.querySelector("label[for='c']");
const dEl = document.querySelector("label[for='d']");

const answers = document.querySelectorAll("input[name='answer']");
const submitBtn = document.getElementById("submitBtn");
const quizEl = document.getElementById("quiz");

let quizCount = 0;
let score = 0;

const loadQuiz = () => {
  deSelectAnswer();
  let currentQuiz = quizData[quizCount];
  questionEl.innerHTML = currentQuiz.question;
  aEl.innerHTML = currentQuiz.a;
  bEl.innerHTML = currentQuiz.b;
  cEl.innerHTML = currentQuiz.c;
  dEl.innerHTML = currentQuiz.d;
};

const getSelectedAnswer = () => {
  let selectedAnswer = false;

  answers.forEach((el) => {
    if (el.checked) {
      selectedAnswer = el.id;
    }
  });

  return selectedAnswer;
};

const deSelectAnswer = () => {
  answers.forEach((el) => {
    el.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  let selectedAnswer = getSelectedAnswer();
  if (quizCount < quizData.length - 1) {
    if (selectedAnswer) {
      if (selectedAnswer === quizData[quizCount].correct) {
        score++;
      }
      quizCount++;
      loadQuiz();
    }
  } else {
    quizEl.innerHTML = `<h1>Congratulations! You just scored ${score} out of ${quizData.length} questions.</h1><button onClick="location.reload();">Play Again!</button>`;
  }
});

loadQuiz();
