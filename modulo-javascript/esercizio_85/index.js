// Gestione degli errori di una catena di promise
function randomOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.random(); // Numero casuale tra 0 e 1
            // Se il numero è maggiore di 0.3, la promise si risolve con quel numero.
            // altrimenti la promise viene rifiutata con un messaggio di errore.
            if (randomNumber > 0.3) {
                resolve(randomNumber);
            } else {
                reject("Errore: Numero troppo basso!");
            }
        }, 1000); // Il timeout di 1 secondo (setTimeout) simula un'operazione asincrona.
    });
}
// Primo .then(): Stampa il numero generato e lo moltiplica per 10.
// Secondo .then(): Stampa il nuovo valore e aggiunge 5.
// Terzo .then(): Stampa il valore finale.
randomOperation()
    .then(value => {
        console.log(`Successo! Numero generato: ${value.toFixed(2)}`);
        return value * 10; // Moltiplica il numero per 10
    })
    .then(newValue => {
        console.log(`Dopo la moltiplicazione: ${newValue.toFixed(2)}`);
        return newValue + 5; // Aggiunge 5
    })
    .then(finalValue => {
        console.log(`Dopo l'aggiunta di 5: ${finalValue.toFixed(2)}`);
    })
    .catch(error => {
        console.error(error); // Gestisce qualsiasi errore nella catena
    });
/*
output con numero > 0.3
Successo! Numero generato: 0.85
Dopo la moltiplicazione: 8.51
Dopo l'aggiunta di 5: 13.51
output con numero < 0.3
Errore: Numero troppo basso!
*/ 