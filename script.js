let currentQuestionIndex = 0;
let leiTotalScore = 0;
let luiTotalScore = 0;

const questions = [];

fetch('questions.json') // Carica le domande dal file JSON
    .then(response => response.json())
    .then(data => {
        questions.push(...data.questions);
        loadQuestion();
    });

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question").innerText = question.question;
    } else {
        alert("Hai finito il quiz! Il punteggio finale è: Lei " + leiTotalScore + " Lui " + luiTotalScore);
    }
}

function nextQuestion() {
    // Qui puoi aggiungere logica per confrontare le risposte inserite, se necessario
    const leiPoints = parseInt(document.getElementById("lei-points").value);
    const luiPoints = parseInt(document.getElementById("lui-points").value);

    leiTotalScore += leiPoints;
    luiTotalScore += luiPoints;

    // Mostra i punteggi aggiornati
    document.getElementById("lei-total").innerText = leiTotalScore;
    document.getElementById("lui-total").innerText = luiTotalScore;

    // Reset dei campi
    document.getElementById("lei-answer").value = '';
    document.getElementById("lui-answer").value = '';
    document.getElementById("lei-points").value = 0;
    document.getElementById("lui-points").value = 0;

    // Passa alla prossima domanda
    currentQuestionIndex++;
    loadQuestion();
}
