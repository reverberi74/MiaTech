// Gestione di una Promise con Catch
function waitTwoSecondsWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% di possibilità di successo
            if (success) {
                resolve("La promise è stata risolta con successo!");
            } else {
                reject("Errore: la promise è stata rifiutata.");
            }
        }, 2000);
    });
}

// Gestione della Promise con then() per il successo e catch() per l'errore
waitTwoSecondsWithError()
    .then((message) => {
        console.log(message); // Se la Promise si risolve, stampa il messaggio
    })
    .catch((error) => {
        console.error(error); // Se la Promise viene rifiutata, stampa l'errore
    });
/*
La promessa è stata risolta con successo! // caso con successo
Errore: la promessa è stata rifiutata. // caso con errore
*/ 