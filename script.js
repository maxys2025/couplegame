let questions = [
{ "question": "Qual è il suo cibo preferito?", "category": “Preferenze” },
{ "question": "Qual è il suo colore preferito?", "category": “Preferenze” },
{ "question": "Qual è il suo film preferito?", "category": “Preferenze” },
{ "question": "Qual è la sua stagione dell’anno preferita?", "category": “Preferenze” },
{ "question": "Ha un hobby fa nel tempo libero?", "category": “Preferenze” },
{ "question": "Qual è il suo libro preferito?", "category": “Preferenze” },
{ "question": "Se potesse vivere in qualsiasi città del mondo, dove andrebbe?", "category": “Preferenze” },
{ "question": "Qual è il suo genere musicale preferito?", "category": “Preferenze” },
{ "question": "Qual è il suo sport preferito?", "category": “Preferenze” },
{ "question": "Qual è il suo piatto preferito da cucinare?", "category": “Preferenze” },
{ "question": "Qual è la sua bevanda preferita?", "category": “Preferenze” },
{ "question": "Ha una serie TV che ama?", "category": “Preferenze” },
{ "question": "Qual è il tuo animale preferito?", "category": “Preferenze” },
{ "question": "Cosa si rilassa dopo una lunga giornata?", "category": “Preferenze” },
{ "question": "Colleziona qualcosa?", "category": “Preferenze” },
{ "question": "Preferisce la montagna o il mare?", "category": “Preferenze” },
{ "question": "Qual è il suo colore di vestiti preferito?", "category": “Preferenze” },
{ "question": "Ha un film che guardi ogni anno?", "category": “Preferenze” },
{ "question": "Qual è la sua attività fisica preferita?", "category": “Preferenze” },
{ "question": "C’è un cibo che proprio non gli/le piace?", "category": “Preferenze” },
{ "question": "Qual è il viaggio più memorabile che ha fatto? ", "category": “Esperienze” },
{ "question": "Qual è stato il posto più bello che ha visitato finora? ", "category": “Esperienze” },
{ "question": "Qual è l’esperienza più strana che ha vissuto in vacanza?", "category": “Esperienze” },
{ "question": "Ha mai fatto un’esperienza che gli/le ha cambiato la vita?", "category": “Esperienze” },
{ "question": "Qual è l’avventura più emozionante che ha vissuto? ", "category": “Esperienze” },
{ "question": "Ha mai fatto un’attività estrema come il paracadutismo o il bungee jumping? ", "category": “Esperienze” },
{ "question": "C’è un posto che sogna di visitare da sempre? ", "category": “Esperienze” },
{ "question": " Qual è la sua esperienza di campeggio più divertente?", "category": “Esperienze” },
{ "question": "Ha mai viaggiato all’estero da solo/a? ", "category": “Esperienze” },
{ "question": "C’è una cultura che lo/la affascina particolarmente? ", "category": “Esperienze” },
{ "question": "Ha mai fatto una lunga escursione in montagna o in natura?", "category": “Esperienze” },
{ "question": "Qual è stata la sua prima volta in aereo? ", "category": “Esperienze” },
{ "question": "Ha mai partecipato a un festival o evento speciale? ", "category": “Esperienze” },
{ "question": "Qual è stato il miglior concerto a cui è andato/a? ", "category": “Esperienze” },
{ "question": "Qual è la sua esperienza più divertente con amici o famiglia? ", "category": “Esperienze” },
{ "question": "Ha mai fatto un viaggio senza una meta precisa? ", "category": “Esperienze” },
{ "question": "C’è un’attività che gli/le piacerebbe provare, ma non l’ha mai fatto? ", "category": “Esperienze” },
{ "question": "Ha mai incontrato qualcuno di famoso? ", "category": “Esperienze” },
{ "question": “Ha mai partecipato a un viaggio organizzato? ", "category": “Esperienze” },
{ "question": "Se potesse fare un viaggio dove andrebbe?", "category": “Esperienze” },
{ "question": " Qual è la sua più grande paura? ", "category": "Vita Personale" },
{ "question": " Cosa lo/la rende più felice nella vita? ", "category": “Vita Personale” },
{ "question": " Qual è la cosa più romantica che ha mai fatto per qualcuno? ", "category": “Vita Personale” },
{ "question": " Cosa lo/la fa arrabbiare facilmente? ", "category": “Vita Personale” },
{ "question": " Come gli/le piace trascorrere una serata tranquilla con il partner? ", "category": “Vita Personale” },
{ "question": " Qual è il suo sogno più grande per il futuro? ", "category": “Vita Personale” },
{ "question": " Se potesse cambiare una cosa di te quale sarebbe? ", "category": “Vita Personale” },
{ "question": " Cosa lo/la ha fatto/a innamorare di te? ", "category": “Vita Personale” },
{ "question": " Qual è la qualità che più apprezza in una relazione? ", "category": “Vita Personale” },
{ "question": " Cosa farebbe felice la sua famiglia di te? ", "category": “Vita Personale” },
{ "question": " Cosa lo/la rende orgoglioso di te? ", "category": “Vita Personale” },
{ "question": " Qual è il suo più grande rimpianto? ", "category": “Vita Personale” },
{ "question": " Qual è il suo obiettivo nella vita professionale? ", "category": “Vita Personale” },
{ "question": " Come gestisce lo stress? ", "category": “Vita Personale” },
{ "question": " Cosa gli/le piace fare per sorprendere il partner? ", "category": “Vita Personale” },
{ "question": " Cosa lo/la fa sentire amato/a? ", "category": “Vita Personale” },
{ "question": " Qual è il modo migliore per far sorridere il partner? ", "category": “Vita Personale” },
{ "question": " Se potesse cambiare qualcosa nella nostra relazione, cosa sarebbe? ", "category": “Vita Personale” },
{ "question": " Cosa gli/le piacerebbe fare insieme a me che non abbiamo mai fatto? ", "category": “Vita Personale” },
{ "question": " Come immagina il vostro futuro insieme? ", "category": “Vita Personale” },
{ "question": " Se avesse un superpotere, quale sarebbe? ", "category": "Curiosità" },
{ "question": " Se potesse incontrare una persona famosa, chi sarebbe? ", "category": “Curiosità” },
{ "question": " Se potesse imparare una nuova lingua istantaneamente, quale sarebbe? ", "category": “Curiosità” },
{ "question": " Se potesse avere qualsiasi lavoro, quale sceglierebbe senza pensare ai soldi? ", "category": “Curiosità” },
{ "question": " Qual è la cosa più folle che gli/le piacerebbe fare? ", "category": “Curiosità” },
{ "question": "Quando è stato il suo primo bacio?", "category": “Sessualità” },
{ "question": "Quando è stata la sua prima volta?", "category": “Sessualità” },
{ "question": "Dove gli/le piace essere toccato?", "category": “Sessualità” },
{ "question": "In quali posti ha fatto l’amore?", "category": “Sessualità” },
{ "question": " Quale esperienza sessuale lo/la ha divertito di più nella vita? ", "category": “Sessualità” },
{ "question": "Si masturba?", "category": “Sessualità” },
{ "question": " Qual è invece il tuo sogno sessuale più strano? ", "category": “Sessualità” },
{ "question": "Gli/le piacciono i sex toys?", "category": “Sessualità” },
{ "question": "Con quante persona ha fatto sesso nella vita?", "category": “Sessualità” },
{ "question": "Gli/le piacerebbe farsi legare o bendare durante il sesso?", "category": “Sessualità” },
{ "question": "Gli/le piace ricevere/ fare sesso orale?", "category": “Sessualità” },
{ "question": "ha mai praticato sesso anale?", "category": “Sessualità” },
{ "question": "Vorrebbe fare sesso in un posto strano?", "category": “Sessualità” },
{ "question": "Qual è la parte del tuo corpo che più gli/le piace?", "category": “Sessualità” },
{ "question": " Qual è la sua posizione sessuale preferita? ", "category": “Sessualità” },
{ "question": "Ha mai fatto una cosa a tre?", "category": “Sessualità” },
{ "question": " Preferisce dominare o essere dominato? ", "category": “Sessualità” },
{ "question": " Come ha scoperto il sesso la prima volta? ", "category": “Sessualità” }
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
