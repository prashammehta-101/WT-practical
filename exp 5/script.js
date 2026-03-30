const quizData = [
    {
        question: "Which language is used for web structure?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "HTML"
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "C++", "SQL"],
        answer: "CSS"
    },
    {
        question: "Which language is used for interactivity?",
        options: ["Java", "C", "JavaScript", "PHP"],
        answer: "JavaScript"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    progressEl.innerText = "Question " + (currentQuestion + 1) + " of " + quizData.length;

    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        let div = document.createElement("div");
        div.classList.add("option");

        div.innerHTML = `
            <input type="radio" name="option" value="${option}">
            ${option}
        `;
        optionsEl.appendChild(div);
    });
}

nextBtn.addEventListener("click", () => {
    let selected = document.querySelector('input[name="option"]:checked');

    if (selected) {
        if (selected.value === quizData[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz-box").classList.add("hide");
            document.getElementById("result-box").classList.remove("hide");
            document.getElementById("score").innerText = "Your Score: " + score;
        }
    }
});

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-box").classList.remove("hide");
    document.getElementById("result-box").classList.add("hide");
    loadQuestion();
}

loadQuestion();