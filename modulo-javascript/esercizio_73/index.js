// Uso di finally per eseguire codice indipendentemente dal rusultato
function dividi(a, b) {
    try {
        // Controllo se il divisore è zero
        if (b === 0) {
            throw new Error("Errore: impossibile dividere per zero!");
        }

        // Se non ci sono errori, esegue la divisione
        let result = a / b;
        console.log(`Il risultato della divisione è: ${result}`);

    } catch (error) {
        // Gestisce l'errore e stampa un messaggio nella console
        console.error("Si è verificato un errore:", error.message);
    
    } finally {
        // Questo blocco viene eseguito sempre, indipendentemente da errori
        console.log("Operazione completata.");
    }
}

// Eseguiamo la funzione con diversi casi di test
dividi(12, 4);  // Output: Il risultato della divisione è: 3 // Operazione completata.
dividi(8, 0);   // Output: Si è verificato un errore: impossibile dividere per zero! // Operazione completata.
dividi(15, 3);  // Output: Il risultato della divisione è: 5 // Operazione completata.
