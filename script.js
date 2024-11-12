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

  // Aggiorna le etichette con i nomi personalizzati
  document.getElementById('label-him').innerText = nameHim;
  document.getElementById('label-her').innerText = nameHer;

  // Nasconde il form dei nomi e mostra il contenuto del gioco
  document.getElementById('name-input').style.display = "none";
  document.getElementById('game-content').style.display = "block";

  // Carica la prima domanda
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
