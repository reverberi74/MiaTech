// Utilizzare Promise.all
function firstPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Prima Promise risolta in 2 secondi!");
        }, 2000);
    });
}

function secondPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Seconda Promise risolta in 3 secondi!");
        }, 3000);
    });
}

console.log("Avvio delle Promise...");

Promise.all([firstPromise(), secondPromise()])
    .then(results => {
        console.log("Tutte le Promise sono state risolte!");
        results.forEach(result => console.log(result));
    })
    .catch(error => {
        console.error("Errore in una delle Promise:", error);
    });
/*
output:
Avvio delle Promise...
Tutte le Promise sono state risolte!
Prima Promise risolta in 2 secondi!
Seconda Promise risolta in 3 secondi!

Se una delle due fallisce:
Avvio delle Promise...
Errore in una delle Promise: Errore nella seconda Promise!*/

/*
Promise.all() per eseguire entrambe in parallelo

Aspetta che tutte le Promise siano risolte prima di restituire i risultati.

Se una delle due promise fallisce, l’intero Promise.all() viene rifiutato con quell'errore.

Quando entrambe le Promise sono completate, i risultati vengono stampati in un array.*/ 
 