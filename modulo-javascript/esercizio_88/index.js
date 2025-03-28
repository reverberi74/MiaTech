// Utilizzare Promise.allSettled
// Funzione che restituisce una promise risolta dopo 1 secondo
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dati 1 ricevuti"), 1000);
    });
}

// Funzione che restituisce una promise rifiutata dopo 2 secondi
function fetchData2() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Errore nel recupero dati 2"), 2000);
    });
}

// Funzione che restituisce una promise risolta dopo 3 secondi
function fetchData3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dati 3 ricevuti"), 3000);
    });
}

// Utilizziamo Promise.allSettled per eseguire tutte le promise in parallelo
// indipendentemente che la promise sia "fulfilled"=risolta o "rejected"=rifiutata
Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
    .then(results => {
        console.log("Risultati di tutte le promise:");
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} risolta con valore: ${result.value}`);
            } else {
                console.log(`Promise ${index + 1} rifiutata con motivo: ${result.reason}`);
            }
        });
    });

/*
output:
Risultati di tutte le promise:
Promise 1 risolta con valore: Dati 1 ricevuti
Promise 2 rifiutata con motivo: Errore nel recupero dati 2
Promise 3 risolta con valore: Dati 3 ricevuti
*/
