let currentQuestion = 0;
let score = 0;
let questions = [];

fetch('questions.json') // Carica il file JSON
    .then(response => response.json())
    .then(data => {
        questions = data.questions;
        loadQuestion();
    });

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        document.getElementById("question").innerText = question.question;
        document.getElementById("answer-input").value = ''; // Reset input
        document.getElementById("submit-answer").disabled = false; // Rende il pulsante abilitato
    } else {
        alert("Hai finito il quiz! Il tuo punteggio finale è: " + score);
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById("answer-input").value.trim();
    
    // Qui aggiungi logica per confrontare la risposta con quella che il partner ha dato
    // (verifica se la risposta che il partner ha dato coincide, o lascia che la coppia valuti la risposta)
    
    // Questo esempio semplicemente incrementa il punteggio se la risposta è considerata corretta
    if (userAnswer.length > 0) {
        score++;
        document.getElementById("score-value").innerText = score;
    }

    document.getElementById("submit-answer").disabled = true; // Disabilita il pulsante
    document.getElementById("next-question").disabled = false; // Abilita il pulsante per la prossima domanda
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("next-question").disabled = true; // Disabilita il pulsante
    loadQuestion();
}
