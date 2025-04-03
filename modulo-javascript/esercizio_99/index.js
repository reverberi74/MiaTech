// Utilizzare il localStorage
/**
 * Script per la gestione del localStorage: salvataggio, recupero e rimozione
 * con stampa dei valori nella console durante ogni operazione
 */

// Funzione per salvare un valore nel localStorage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Valore salvato nel localStorage: ${key} = `, value);
    } catch (error) {
        console.error(`Errore nel salvare nel localStorage: ${error.message}`);
    }
}

// Funzione per recuperare un valore dal localStorage
function getFromLocalStorage(key) {
    try {
        const value = localStorage.getItem(key);
        if (value === null) {
            console.log(`Valore non trovato nel localStorage: ${key}`);
            return null;
        }
        
        const parsedValue = JSON.parse(value);
        console.log(`Valore recuperato dal localStorage: ${key} = `, parsedValue);
        return parsedValue;
    } catch (error) {
        console.error(`Errore nel recuperare dal localStorage: ${error.message}`);
        return null;
    }
}

// Funzione per rimuovere un valore dal localStorage
function removeFromLocalStorage(key) {
    try {
        // Verifichiamo prima se la chiave esiste
        if (localStorage.getItem(key) === null) {
            console.log(`Impossibile rimuovere: chiave ${key} non trovata nel localStorage`);
            return false;
        }
        
        localStorage.removeItem(key);
        console.log(`Valore rimosso dal localStorage: ${key}`);
        return true;
    } catch (error) {
        console.error(`Errore nella rimozione dal localStorage: ${error.message}`);
        return false;
    }
}

// Funzione per visualizzare tutti i valori presenti nel localStorage
function displayAllLocalStorage() {
    console.log("Contenuto attuale del localStorage:");
    
    if (localStorage.length === 0) {
        console.log("Il localStorage è vuoto");
        return;
    }
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        try {
            console.log(`${key} = `, JSON.parse(value));
        } catch {
            console.log(`${key} = ${value}`);
        }
    }
}

// Funzione di test delle operazioni sul localStorage
function testLocalStorageOperations() {
    console.log("--- Inizio test operazioni sul localStorage ---");
    
    // Visualizza il contenuto iniziale
    console.log("Stato iniziale:");
    displayAllLocalStorage();
    
    // Salvataggio di diversi tipi di dati
    console.log("\nSalvataggio valori:");
    saveToLocalStorage("username", "mario_rossi");
    saveToLocalStorage("isLoggedIn", true);
    saveToLocalStorage("userPreferences", {
        theme: "dark",
        fontSize: "medium",
        notifications: true
    });
    saveToLocalStorage("recentSearches", ["javascript", "localStorage", "web development"]);
    
    // Visualizza dopo il salvataggio
    console.log("\nDopo il salvataggio:");
    displayAllLocalStorage();
    
    // Recupero dei valori
    console.log("\nRecupero valori:");
    const username = getFromLocalStorage("username");
    const isLoggedIn = getFromLocalStorage("isLoggedIn");
    const userPrefs = getFromLocalStorage("userPreferences");
    const searches = getFromLocalStorage("recentSearches");
    const nonExistentValue = getFromLocalStorage("nonEsistente");
    
    // Rimozione di un valore
    console.log("\nRimozione valori:");
    removeFromLocalStorage("recentSearches");
    removeFromLocalStorage("nonEsistente");
    
    // Visualizza dopo la rimozione
    console.log("\nDopo la rimozione:");
    displayAllLocalStorage();
    
    console.log("--- Fine test operazioni sul localStorage ---");
}

// Esegui il test
testLocalStorageOperations();