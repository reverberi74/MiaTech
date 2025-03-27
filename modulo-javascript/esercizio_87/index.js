// Utilizzare Promise.race
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

Promise.race([firstPromise(), secondPromise()])
    .then(result => {
        console.log("La prima Promise completata è:", result);
    })
    .catch(error => {
        console.error("Errore nella Promise:", error);
    });
/*
output:
Avvio delle Promise...
La prima Promise completata è: Prima Promise risolta in 2 secondi! 

Se modifichiamo firstPromise() per essere rifiutata (reject()),
allora Promise.race() restituirà il suo errore: 
Avvio delle Promise...
Errore nella Promise: Errore nella prima Promise!*/