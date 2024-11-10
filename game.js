let domande = [];
let punteggioLui = 0;
let punteggioLei = 0;
let indiceDomanda = 0;

// Carica il file JSON con le domande
fetch('domande.json')
    .then(response => response.json())
    .then(data => {
        domande = data;
        mostraDomanda();  // Mostra la prima domanda appena il JSON è caricato
    })
    .catch(error => console.error('Errore nel caricare il file JSON:', error));

function mostraDomanda() {
    if (indiceDomanda < domande.length) {
        const domanda = domande[indiceDomanda];
        document.getElementById("domanda").innerText = domanda.question;
        document.getElementById("categoria").innerText = domanda.category;
        indiceDomanda++;
    } else {
        alert("Hai finito le domande! Punteggio finale:\nLui: " + punteggioLui + "\nLei: " + punteggioLei);
        // Nascondi il pulsante "Prossima Domanda" quando tutte le domande sono state mostrate
        document.querySelector("button").style.display = "none";
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
