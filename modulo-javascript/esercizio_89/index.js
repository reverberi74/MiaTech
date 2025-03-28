// Funzione asincrona semplice
// Funzione che restituisce una promise che si risolve dopo 2 secondi
function waitForMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("La promise è stata risolta dopo 2 secondi!");
        }, 2000);
    });
}

// Funzione asincrona che utilizza await per aspettare la promise
async function asyncFunction() {
    console.log("Attendo il messaggio...");
    
    const message = await waitForMessage(); // Aspetta la risoluzione della promise
    console.log(message); // Stampa il messaggio risolto
}

// Chiamata della funzione asincrona
asyncFunction();

/*output:
Attendo il messaggio...
La promise è stata risolta dopo 2 secondi!
*/