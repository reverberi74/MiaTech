// Catena di promise con gestione degli errori
function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomValue = Math.random(); // Genera un numero casuale tra 0 e 1
            if (randomValue > 0.5) {
                resolve(`Successo! Numero generato: ${randomValue.toFixed(2)}`); 
            } else {
                reject(`Errore! Numero troppo basso: ${randomValue.toFixed(2)}`);
            }
        }, 1000);
    });
}

randomPromise()
    .then((message) => {
        console.log("Risultato:", message);
        return `Messaggio elaborato: ${message.toUpperCase()}`;
    })
    .then((finalMessage) => {
        console.log(finalMessage);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Operazione completata.");
    });
/*
   output con numero < 0.5
   Errore! Numero troppo basso: 0.17
   Operazione completata.
   output con numero > 0.5
   Risultato: Successo! Numero generato: 0.50
   Messaggio elaborato: SUCCESSO! NUMERO GENERATO: 0.50
   Operazione completata.
 */