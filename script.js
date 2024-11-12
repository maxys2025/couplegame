let questions = [
  { "question": "Qual è stato uno dei momenti più felici della tua infanzia?", "category": "Passato e Ricordi" },
  { "question": "C'è un insegnante che ha avuto un impatto particolare su di te?", "category": "Passato e Ricordi" },
  { "question": "Hai mai avuto un sogno ricorrente? Di cosa si trattava?", "category": "Passato e Ricordi" }
];

let currentQuestionIndex = 0;
let scores = { him: 0, her: 0 };
const goalScore = 10;  // Punteggio necessario per vincere

function updateScore(player, amount) {
  scores[player] += amount;
  document.getElementById(`score-${player}`).innerText = scores[player];
  
  // Controlla se il giocatore ha raggiunto il punteggio per vincere
  checkForWinner(player);
}

function checkForWinner(player) {
  if (scores[player] >= goalScore) {
    document.getElementById('question-box').innerHTML = `<h2>${player === 'him' ? 'Lui' : 'Lei'} vince con ${goalScore} punti!</h2>`;
    disableButtons();  // Disattiva i pulsanti una volta che qualcuno ha vinto
  }
}

function disableButtons() {
  document.querySelectorAll('.score-btn').forEach(button => button.disabled = true);
  document.querySelector('button[onclick="nextQuestion()"]').disabled = true;
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length) {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('category').innerText = `Categoria: ${questionData.category}`;
    document.getElementById('question').innerText = questionData.question;
    currentQuestionIndex++;
  } else {
    document.getElementById('question').innerText = "Gioco completato!";
    document.getElementById('category').innerText = "";
  }
}

// Carica la prima domanda all'inizio
nextQuestion();
