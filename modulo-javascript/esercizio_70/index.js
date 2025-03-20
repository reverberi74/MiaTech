// Utilizzare setInterval con clearInterval
// Dichiarazione della funzione che stampa il messaggio
function stampaMessaggio() {
    console.log("Questo messaggio viene stampato ogni secondo!");
}

// Utilizzo di setInterval per chiamare la funzione ogni 1000ms (1 secondo)
const intervallo = setInterval(stampaMessaggio, 1000);

// Interrompere l'intervallo dopo 5 secondi
setTimeout(() => {
    clearInterval(intervallo);
    console.log("Intervallo interrotto dopo 5 secondi.");
}, 5000);