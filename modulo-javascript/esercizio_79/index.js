// Promise con Finally
function waitTwoSecondsWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% di probabilità di successo
            if (success) {
                resolve("La promise è stata risolta con successo!");
            } else {
                reject("Errore: la promise è stata rifiutata.");
            }
        }, 2000);
    });
}

// Gestione della Promise con then(), catch() e finally()
waitTwoSecondsWithError()
    .then((message) => {
        console.log(message); // Se la Promise si risolve, stampa il messaggio
    })
    .catch((error) => {
        console.error(error); // Se la Promise viene rifiutata, stampa l'errore
    })
    .finally(() => {
        console.log("Operazione completata, indipendentemente dal risultato.");
    });
/*
La promessa è stata risolta con successo! // caso con successo
Operazione completata, indipendentemente dal risultato.
Errore: la promessa è stata rifiutata. // caso con errore
Operazione completata, indipendentemente dal risultato.
*/ 