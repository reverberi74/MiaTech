// Gestione degli errori con try e catch
// Funzione che restituisce una promise che può essere risolta o rifiutata
function checkCondition(shouldResolve) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Restituisce una Promise che, dopo 2 secondi, viene risolta
            // se shouldResolve === true, oppure rifiutata se shouldResolve === false.
            if (shouldResolve) {
                resolve("Operazione completata con successo!");
            } else {
                reject("Errore: l'operazione è fallita!");
            }
        }, 2000);
    });
}

// Funzione asincrona che utilizza await e gestisce l'errore con try/catch
async function asyncFunction(shouldResolve) {
    try {
        console.log("Attendo il risultato...");

        const result = await checkCondition(shouldResolve); // Aspetta la risoluzione o il rifiuto
        console.log("Successo:", result);  // Stampa se la promise è risolta

    } catch (error) {
        console.error("Errore catturato:", error); // Stampa il messaggio di errore
    }
}

 
asyncFunction(true);  // Simula il caso in cui la promise viene risolta
// output: Attendo il risultato...  Successo: Operazione completata con successo!
asyncFunction(false); // Simula il caso in cui la promise viene rifiutata
// output: Attendo il risultato...  Errore catturato: Errore: l'operazione è fallita!