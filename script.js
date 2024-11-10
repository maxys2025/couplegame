let currentQuestionIndex = 0;
let leiTotalScore = 0;
let luiTotalScore = 0;

const questions = [];

fetch('questions.json') // Carica le domande dal file JSON
    .then(response => response.json())
    .then(data => {
        questions.push(...data);
        loadQuestion();
    });

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        // Carica la categoria
        document.getElementById("category").innerText = `Categoria: ${question.category}`;
        // Carica la domanda
        document.getElementById("question").innerText = question.question;
    } else {
        alert("Hai finito il quiz! Il punteggio finale è: Lei " + leiTotalScore + " Lui " + luiTotalScore);
    }
}

function nextQuestion() {
    // Aggiungi i punteggi assegnati dai partecipanti
    const leiPoints = parseInt(document.getElementById("lei-points").value);
    const luiPoints = parseInt(document.getElementById("lui-points").value);

    // Somma i punteggi ai totali
    leiTotalScore += leiPoints;
    luiTotalScore += luiPoints;

    // Aggiorna il punteggio totale visualizzato
    document.getElementById("lei-total").innerText = leiTotalScore;
    document.getElementById("lui-total").innerText = luiTotalScore;

    // Reset dei campi per la prossima domanda
    document.getElementById("lei-points").value = 0;
    document.getElementById("lui-points").value = 0;

    // Passa alla prossima domanda
    currentQuestionIndex++;
    loadQuestion();
}
