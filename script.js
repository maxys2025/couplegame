let questions = [];
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

function loadQuestions() {
  fetch('questions.json')
    .then(response => response.json())
    .then(data => {
      questions = data;
      nextQuestion();
    })
    .catch(error => console.error("Errore nel caricamento delle domande:", error));
}

// Carica le domande quando la pagina è pronta
window.onload = loadQuestions;
