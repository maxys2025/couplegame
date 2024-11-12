let questions = [
  { "question": "Qual è il suo cibo preferito?", "category": "Preferenze" },
  { "question": "Qual è il suo colore preferito?", "category": "Preferenze" },
  { "question": "Qual è il suo film preferito?", "category": "Preferenze" },
  { "question": "Qual è la sua stagione dell’anno preferita?", "category": "Preferenze" },
  { "question": "Ha un hobby nel tempo libero?", "category": "Preferenze" },
  { "question": "Qual è il suo libro preferito?", "category": "Preferenze" },
  { "question": "Se potesse vivere in qualsiasi città del mondo, dove andrebbe?", "category": "Preferenze" },
  { "question": "Qual è il suo genere musicale preferito?", "category": "Preferenze" },
  { "question": "Qual è il suo sport preferito?", "category": "Preferenze" },
  { "question": "Qual è il suo piatto preferito da cucinare?", "category": "Preferenze" },
  { "question": "Qual è la sua bevanda preferita?", "category": "Preferenze" },
  { "question": "Ha una serie TV che ama?", "category": "Preferenze" },
  { "question": "Qual è il tuo animale preferito?", "category": "Preferenze" },
  { "question": "Cosa lo rilassa dopo una lunga giornata?", "category": "Preferenze" },
  { "question": "Colleziona qualcosa?", "category": "Preferenze" },
  { "question": "Preferisce la montagna o il mare?", "category": "Preferenze" },
  { "question": "Qual è il suo colore di vestiti preferito?", "category": "Preferenze" },
  { "question": "Ha un film che guardi ogni anno?", "category": "Preferenze" },
  { "question": "Qual è la sua attività fisica preferita?", "category": "Preferenze" },
  { "question": "C’è un cibo che proprio non gli/le piace?", "category": "Preferenze" },
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
  { "question": "Qual è la sua più grande paura?", "category": "Vita Personale" },
  { "question": "Cosa lo/la rende più felice nella vita?", "category": "Vita Personale" },
  { "question": "Qual è la cosa più romantica che ha mai fatto per qualcuno?", "category": "Vita Personale" },
  { "question": "Cosa lo/la fa arrabbiare facilmente?", "category": "Vita Personale" },
  { "question": "Come gli/le piace trascorrere una serata tranquilla con il partner?", "category": "Vita Personale" },
  { "question": "Qual è il suo sogno più grande per il futuro?", "category": "Vita Personale" },
  { "question": "Se potesse cambiare una cosa di te quale sarebbe?", "category": "Vita Personale" },
  { "question": "Cosa lo/la ha fatto/a innamorare di te?", "category": "Vita Personale" },
  { "question": "Qual è la qualità che più apprezza in una relazione?", "category": "Vita Personale" },
  { "question": "Cosa farebbe felice la sua famiglia di te?", "category": "Vita Personale" },
  { "question": "Cosa lo/la rende orgoglioso di te?", "category": "Vita Personale" },
  { "question": "Qual è il suo più grande rimpianto?", "category": "Vita Personale" },
  { "question": "Qual è il suo obiettivo nella vita professionale?", "category": "Vita Personale" },
  { "question": "Come gestisce lo stress?", "category": "Vita Personale" },
  { "question": "Cosa gli/le piace fare per sorprendere il partner?", "category": "Vita Personale" },
  { "question": "Cosa lo/la fa sentire amato/a?", "category": "Vita Personale" },
  { "question": "Qual è il modo migliore per far sorridere il partner?", "category": "Vita Personale" },
  { "question": "Se potesse cambiare qualcosa nella nostra relazione, cosa sarebbe?", "category": "Vita Personale" },
  { "question": "Cosa gli/le piacerebbe fare insieme a me che non abbiamo mai fatto?", "category": "Vita Personale" },
  { "question": "Come immagina il vostro futuro insieme?", "category": "Vita Personale" },
  { "question": "Se avesse un superpotere, quale sarebbe?", "category": "Curiosità" },
  { "question": "Se potesse incontrare una persona famosa, chi sarebbe?", "category": "Curiosità" },
  { "question": "Se potesse imparare una nuova lingua istantaneamente, quale sarebbe?", "category": "Curiosità" },
  { "question": "Se potesse avere qualsiasi lavoro, quale sceglierebbe senza pensare ai soldi?", "category": "Curiosità" },
  { "question": "Qual è la cosa più folle che gli/le piacerebbe fare?", "category": "Curiosità" },
  { "question": "Quando è stato il suo primo bacio?", "category": "Sessualità" },
  { "question": "Quando è stata la sua prima volta?", "category": "Sessualità" },
  { "question": "Dove gli/le piace essere toccato?", "category": "Sessualità" },
  { "question": "In quali posti ha fatto l’amore?", "category": "Sessualità" },
  { "question": "Quale esperienza sessuale lo/la ha divertito di più nella vita?", "category": "Sessualità" },
  { "question": "Si masturba?", "category": "Sessualità" },
  { "question": "Qual è il tuo sogno sessuale più strano?", "category": "Sessualità" },
  { "question": "Gli/le piacciono i sex toys?", "category": "Sessualità" },
  { "question": "Con quante persone ha fatto sesso nella vita?", "category": "Sessualità" },
  { "question": "Gli/le piacerebbe farsi legare o bendare durante il sesso?", "category": "Sessualità" },
  { "question": "Qual è la sua più grande fantasia?", "category": "Sessualità" },
  { "question": "Gli/le piace fare sesso al buio?", "category": "Sessualità" },
  { "question": "Ha mai fatto sesso all’aperto?", "category": "Sessualità" }
];

let scoreHim = 0;
let scoreHer = 0;
let goalScore = 10;

// Funzione per ottenere una domanda casuale
function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Funzione per mostrare una nuova domanda
function showNewQuestion() {
  const randomQuestion = getRandomQuestion();
  document.getElementById("questionBox").innerText = randomQuestion.question;
  document.getElementById("categoryBox").innerText = randomQuestion.category;
}

// Funzione per aggiornare i punteggi
function updateScores() {
  document.getElementById("scoreHim").innerText = scoreHim;
  document.getElementById("scoreHer").innerText = scoreHer;

  // Controlla se uno dei giocatori ha raggiunto il punteggio obiettivo
  if (scoreHim >= goalScore) {
    alert(`${playerNameHim} ha vinto!`);
    resetGame();
  } else if (scoreHer >= goalScore) {
    alert(`${playerNameHer} ha vinto!`);
    resetGame();
  }
}

// Funzioni per aumentare o diminuire i punti per Lui e Lei
function addPointHim() {
  scoreHim++;
  updateScores();
}

function subtractPointHim() {
  scoreHim--;
  updateScores();
}

function addPointHer() {
  scoreHer++;
  updateScores();
}

function subtractPointHer() {
  scoreHer--;
  updateScores();
}

// Funzione per resettare il gioco
function resetGame() {
  scoreHim = 0;
  scoreHer = 0;
  updateScores();
  showNewQuestion();
}

// Nome dei giocatori personalizzabile
let playerNameHim = "Lui";
let playerNameHer = "Lei";

function setPlayerNames() {
  playerNameHim = document.getElementById("inputNameHim").value || "Lui";
  playerNameHer = document.getElementById("inputNameHer").value || "Lei";
  document.getElementById("scoreLabelHim").innerText = playerNameHim;
  document.getElementById("scoreLabelHer").innerText = playerNameHer;
  resetGame();
}

// Eventi sui pulsanti
document.getElementById("startGameButton").addEventListener("click", showNewQuestion);
document.getElementById("nextQuestionButton").addEventListener("click", showNewQuestion);
document.getElementById("addPointHim").addEventListener("click", addPointHim);
document.getElementById("subtractPointHim").addEventListener("click", subtractPointHim);
document.getElementById("addPointHer").addEventListener("click", addPointHer);
document.getElementById("subtractPointHer").addEventListener("click", subtractPointHer);
document.getElementById("resetGameButton").addEventListener("click", resetGame);
document.getElementById("setNamesButton").addEventListener("click", setPlayerNames);
