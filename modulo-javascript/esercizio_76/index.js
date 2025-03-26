// Callback annidati
// la prima funziona esegue la somma e la passa al callback
function somma(a, b, callback) {
    callback(a + b);
}
// la secondo funzione prende il risulato della somma e la passa a numero, fattore sarà il numero da moltiplicare
//al risultato dell somma e passa il risultato finale al callback
function moltiplica(numero, fattore, callback) {
    callback(numero * fattore);
}

// Eseguiamo le operazioni in sequenza con callback annidati della somma e della moltiplicazione
somma(6, 4, (sommaRisultato) => {
    moltiplica(sommaRisultato, 3, (moltiplicaRisultato) => {
        console.log(`Operazioni completate, risultato finale: ${moltiplicaRisultato}`);
    });
});
// output: Operazioni completate, risultato finale: 30 