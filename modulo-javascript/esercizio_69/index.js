// Utilizzare setInterval
// Dichiarazione della funzione che stampa il messaggio
function stampaMessaggio() {
    console.log("Questo messaggio viene stampato ogni 2 secondi!");
}

// Utilizzo di setInterval per chiamare la funzione ogni 2000ms (2 secondi)
const intervallo = setInterval(stampaMessaggio, 2000);

// Interrompere l'intervallo dopo 10 secondi
setTimeout(() => {
    clearInterval(intervallo);
    console.log("Intervallo interrotto dopo 10 secondi.");
}, 10000);
