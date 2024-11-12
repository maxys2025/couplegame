let questions = [
  { "question": "Qual è il suo cibo preferito?", "category": "Preferenze" },
  { "question": "Qual è il suo colore preferito?", "category": "Preferenze" },
  { "question": "Qual è il suo film preferito?", "category": "Preferenze" },
  { "question": "Qual è la sua stagione dell’anno preferita?", "category": "Preferenze" },
  { "question": "Ha un hobby fa nel tempo libero?", "category": "Preferenze" },
  { "question": "Qual è il suo libro preferito?", "category": "Preferenze" },
  { "question": "Se potesse vivere in qualsiasi città del mondo, dove andrebbe?", "category": "Preferenze" },
  { "question": "Qual è il suo genere musicale preferito?", "category": "Preferenze" },
  { "question": "Qual è il suo sport preferito?", "category": "Preferenze" },
  { "question": "Qual è il suo piatto preferito da cucinare?", "category": "Preferenze" },
  { "question": "Qual è la sua bevanda preferita?", "category": "Preferenze" },
  { "question": "Ha una serie TV che ama?", "category": "Preferenze" },
  { "question": "Qual è il tuo animale preferito?", "category": "Preferenze" },
  { "question": "Cosa si rilassa dopo una lunga giornata?", "category": "Preferenze" },
  { "question": "Colleziona qualcosa?", "category": "Preferenze" },
  { "question": "Preferisce la montagna o il mare?", "category": "Preferenze" },
  { "question": "Qual è il suo colore di vestiti preferito?", "category": "Preferenze" },
  { "question": "Ha un film che guardi ogni anno?", "category": "Preferenze" },
  { "question": "Qual è la sua attività fisica preferita?", "category": "Preferenze" },
  { "question": "C’è un cibo che proprio non gli/le piace? ", "category": "Preferenze" },
  { "question": "Qual è il viaggio più memorabile che ha fatto?", "category": "Esperienze" },
  { "question": "Qual è stato il posto più bello che ha visitato finora?", "category": "Esperienze" },
  { "question": "Qual è l’esperienza più strana che ha vissuto in vacanza?", "category": "Esperienze" },
  { "question": "Ha mai fatto un’esperienza che gli/le ha cambiato la vita?", "category": "Esperienze" },
  { "question": "Qual è l’avventura più emozionante che ha vissuto?", "category": "Esperienze" },
  { "question": "Ha mai fatto un’attività estrema come il paracadutismo o il bungee jumping?", "category": "Esperienze" },
  { "question": "C’è un posto che sogna di visitare da sempre?", "category": "Esperienze" },
  { "question": "Qual è la sua esperienza di campeggio più divertente?", "category": "Esperienze" },
  { "question": "Ha mai viaggiato all’estero da solo/a?", "category": "Esperienze" },
  { "question": "C’è una cultura che lo/la affascina particolarmente?", "category": "Esperienze" },
  { "question": "Ha mai fatto una lunga escursione in montagna o in natura?", "category": "Esperienze" },
  { "question": "Qual è stata la sua prima volta in aereo?", "category": "Esperienze" },
  { "question": "Ha mai partecipato a un festival o evento speciale?", "category": "Esperienze" },
  { "question": "Qual è stato il miglior concerto a cui è andato/a?", "category": "Esperienze" },
  { "question": "Qual è la sua esperienza più divertente con amici o famiglia?", "category": "Esperienze" },
  { "question": "Ha mai fatto un viaggio senza una meta precisa?", "category": "Esperienze" },
  { "question": "C’è un’attività che gli/le piacerebbe provare, ma non l’ha mai fatto?", "category": "Esperienze" },
  { "question": "Ha mai incontrato qualcuno di famoso?", "category": "Esperienze" },
  { "question": "Ha mai partecipato a un viaggio organizzato?", "category": "Esperienze" },
  { "question": "Se potesse fare un viaggio dove andrebbe?", "category": "Esperienze" },
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
