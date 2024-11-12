let questions = [
  { "question": "Qual è stato uno dei momenti più felici della tua infanzia?", "category": "Passato e Ricordi" },
  { "question": "C'è un insegnante che ha avuto un impatto particolare su di te?", "category": "Passato e Ricordi" },
  { "question": "Hai mai avuto un sogno ricorrente? Di cosa si trattava?", "category": "Passato e Ricordi" }
];

let currentQuestionIndex = 0;
let scores = { him: 0, her: 0 };
const goalScore = 10;  // Punteggio per vincere

function startGame() {
  const nameHim = document.getElementById('name-him').value || "Lui";
  const nameHer = document.getElementById('name-her').value || "Lei";

  document.getElementById('label-him').innerText = nameHim;
  document.getElementById('label-her').innerText = nameHer;

  document.getElementById('name-input').style.display = "none";
  document.getElementById('game-content').style.display = "block";

  nextQuestion();
}

function updateScore(player, amount) {
  scores[player] += amount;
  document.getElementById(`score-${player}`).innerText = scores[player];
  checkForWinner(player);
}

function checkForWinner(player) {
  if (scores[player] >= goalScore) {
    document.getElementById('question-box').innerHTML = `<h2>${document.getElementById(`label-${player}`).innerText} vince con ${goalScore} punti!</h2>`;
    disableButtons();
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

// Funzione di reset per ricominciare il gioco
function resetGame() {
  scores = { him: 0, her: 0 };
  currentQuestionIndex = 0;

  // Aggiorna i punteggi
  document.getElementById('score-him').innerText = 0;
  document.getElementById('score-her').innerText = 0;

  // Ricarica la prima domanda e abilita i pulsanti
  nextQuestion();
  document.querySelectorAll('.score-btn').forEach(button => button.disabled = false);
  document.querySelector('button[onclick="nextQuestion()"]').disabled = false;
}
