const quizData = [
  {
    question: "First President of USA ?",
    a: "Hileri Clintor",
    b: "Abrahim Lincon",
    c: "Barak Obama",
    d: "Donald J Trumph",
    correct: "b",
  },
  {
    question: "World Largest Forest ?",
    a: "Amazon",
    b: "Park   ",
    c: "Yoganda Velly",
    d: "Seton Velly",
    correct: "b",
  },
  {
    question: "In Which part of USA called Cilicon Vally",
    a: "New York",
    b: "TelePort",
    c: "Alaska",
    d: "Alabama",
    correct: "a",
  },
  {
    question: "Which age is allowance for marriage?",
    a: "18",
    b: "17",
    c: "16",
    d: "none of the above",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
