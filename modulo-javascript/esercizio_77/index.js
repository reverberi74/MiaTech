// Creare una semplice promise 
function waitTwoSeconds() {
    // new Promise((resolve) => { ... }) crea una nuova Promise.
    return new Promise((resolve) => { // Il parametro resolve è una funzione che dobbiamo chiamare 
        setTimeout(() => {            // per segnalare che la Promise è stata completata con successo.
            resolve("La promise è stata risolta dopo 2 secondi!");
        }, 2000);
    });
}

// Utilizziamo then() per ottenere il valore della Promise quando si risolve
waitTwoSeconds().then((message) => {
    console.log(message); // Stampa: "La promise è stata risolta dopo 2 secondi!"
});
