// Gestione di un errore semplice
function dividi(a, b) {
    try {
        // Controlliamo se il divisore è zero
        if (b === 0) {
            throw new Error("Divisione per zero non consentita!");
        }
        // Eseguiamo la divisione
        let result = a / b;
        console.log(`Il risultato della divisione è: ${result}`);
    } catch (error) {
        // Gestiamo l'errore e stampiamo il messaggio
        console.error("Si è verificato un errore:", error.message);
    }
}
dividi(12, 4); // Output: Il risultato della divisione è: 3
dividi(8, 0);  // Output: Si è verificato un errore: Divisione per zero non consentita!
 
