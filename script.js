let questions = [
  { "question": "Qual è stato uno dei momenti più felici della tua infanzia?", "category": "Passato e Ricordi" },
  { "question": "C'è un insegnante che ha avuto un impatto particolare su di te?", "category": "Passato e Ricordi" },
  { "question": "Hai mai avuto un sogno ricorrente? Di cosa si trattava?", "category": "Passato e Ricordi" }
];

let currentQuestionIndex = 0;
let scores = { him: 0, her: 0 };

function updateScore(player, amount) {
  scores[player] += amount;
  document.getElementById(`score-${player}`).innerText = scores[player];
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
