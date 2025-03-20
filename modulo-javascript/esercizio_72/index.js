// Gestione di più tipi di errori
function processString(str) {
    try {
        // Verifichiamo che l'argomento sia una stringa
        if (typeof str !== "string") {
            throw new TypeError("il valore passato non è una stringa!");
        }

        // Simuliamo un errore generico se la stringa è vuota
        if (str.length === 0) {
            throw new Error("Errore generico: la stringa non può essere vuota!");
        }

        // Convertiamo la stringa in maiuscolo
        let upperStr = str.toUpperCase();
        console.log(`Stringa elaborata: ${upperStr}`);

    } catch (error) {
        // Gestione specifica di un TypeError
        if (error instanceof TypeError) {
            console.error("Si è verificato un errore di tipo:", error.message);
        } 
        // Gestione di altri tipi di errori
        else {
            console.error("", error.message);
        }
    }
}

processString("Porta Fortuna");  // Output: Stringa elaborata: Porta Fortuna
processString(879);           // Output: Si è verificato un errore di tipo:  il valore passato non è una stringa!
processString("");            // Output: Errore generico: la stringa non può essere vuota!
