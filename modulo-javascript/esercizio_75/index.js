// Funzione con callback e passaggio parametri
function funzionePrincipale(a, b, callback) {
    // Eseguiamo l'operazione (moltiplicazione) e la passa al callback
    callback(a * b);
}
// la funzione principale esegue l'operazione moltiplicazione e poi chiama il callback per stampare il risultato
funzionePrincipale(5, 4, function (risultato){
 console.log("Il risultato dell'operaizone è: "+risultato);
})

 // output: Il risultato dell'operaizone è: 20
