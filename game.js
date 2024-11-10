const domande = [
    { "question": "Qual è stato uno dei momenti più felici della tua infanzia?", "category": "Passato e Ricordi" },
    { "question": "C'è un insegnante che ha avuto un impatto particolare su di te?", "category": "Passato e Ricordi" },
    { "question": "Hai mai avuto un sogno ricorrente? Di cosa si trattava?", "category": "Passato e Ricordi" }
];

let punteggioLui = 0;
let punteggioLei = 0;
let indiceDomanda = 0;

function mostraDomanda() {
    if (indiceDomanda < domande.length) {
        const domanda = domande[indiceDomanda];
        document.getElementById("domanda").innerText = domanda.question;
        document.getElementById("categoria").innerText = domanda.category;
        indiceDomanda++;
    } else {
        alert("Hai finito le domande!");
    }
}

function aggiungiPunto(chi) {
    if (chi === 'lui') {
        punteggioLui++;
        document.getElementById("punteggio-lui").innerText = punteggioLui;
    } else if (chi === 'lei') {
        punteggioLei++;
        document.getElementById("punteggio-lei").innerText = punteggioLei;
    }
}
