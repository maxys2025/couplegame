const questions = [
    {
        question: "Qual è il nostro primo film insieme?",
        options: ["Titanic", "Inception", "Avatar", "The Notebook"],
        correct: 3
    },
    {
        question: "Dove ci siamo conosciuti?",
        options: ["Al bar", "In palestra", "A scuola", "Su internet"],
        correct: 0
    },
    // Aggiungi altre domande qui
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").innerText = question.question;
    const buttons = document.querySelectorAll("#answers button");
    question.options.forEach((option, index) => {
        buttons[index].innerText = option;
    });
}

function checkAnswer(answerIndex) {
    const question = questions[currentQuestion];
    if (answerIndex === question.correct) {
        score++;
        document.getElementById("score-value").innerText = score;
    } else {
        alert("Ops, hai sbagliato! Prova di nuovo.");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Hai completato il quiz! Il tuo punteggio finale è: " + score);
    }
}

loadQuestion();
