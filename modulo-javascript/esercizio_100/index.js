// Utilizzare il sessionStorage
/**
 * Script per la gestione del sessionStorage: salvataggio, recupero e rimozione
 * con stampa dei valori nella console durante ogni operazione
 */

// Funzione per salvare un valore nel sessionStorage
function saveToSessionStorage(key, value) {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
        console.log(`Valore salvato nel sessionStorage: ${key} = `, value);
    } catch (error) {
        console.error(`Errore nel salvare nel sessionStorage: ${error.message}`);
    }
}

// Funzione per recuperare un valore dal sessionStorage
function getFromSessionStorage(key) {
    try {
        const value = sessionStorage.getItem(key);
        if (value === null) {
            console.log(`Valore non trovato nel sessionStorage: ${key}`);
            return null;
        }
        
        const parsedValue = JSON.parse(value);
        console.log(`Valore recuperato dal sessionStorage: ${key} = `, parsedValue);
        return parsedValue;
    } catch (error) {
        console.error(`Errore nel recuperare dal sessionStorage: ${error.message}`);
        return null;
    }
}

// Funzione per rimuovere un valore dal sessionStorage
function removeFromSessionStorage(key) {
    try {
        // Verifichiamo prima se la chiave esiste
        if (sessionStorage.getItem(key) === null) {
            console.log(`Impossibile rimuovere: chiave ${key} non trovata nel sessionStorage`);
            return false;
        }
        
        sessionStorage.removeItem(key);
        console.log(`Valore rimosso dal sessionStorage: ${key}`);
        return true;
    } catch (error) {
        console.error(`Errore nella rimozione dal sessionStorage: ${error.message}`);
        return false;
    }
}

// Funzione per visualizzare tutti i valori presenti nel sessionStorage
function displayAllSessionStorage() {
    console.log("Contenuto attuale del sessionStorage:");
    
    if (sessionStorage.length === 0) {
        console.log("Il sessionStorage è vuoto");
        return;
    }
    
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        try {
            console.log(`${key} = `, JSON.parse(value));
        } catch {
            console.log(`${key} = ${value}`);
        }
    }
}

// Funzione per svuotare completamente il sessionStorage
function clearSessionStorage() {
    sessionStorage.clear();
    console.log("SessionStorage completamente svuotato");
}

// Funzione di test delle operazioni sul sessionStorage
function testSessionStorageOperations() {
    console.log("--- Inizio test operazioni sul sessionStorage ---");
    
    // Visualizza il contenuto iniziale
    console.log("Stato iniziale:");
    displayAllSessionStorage();
    
    // Salvataggio di diversi tipi di dati
    console.log("\nSalvataggio valori:");
    saveToSessionStorage("currentUser", "user123");
    saveToSessionStorage("isActive", true);
    saveToSessionStorage("sessionConfig", {
        startTime: new Date().toISOString(),
        timeout: 30,
        securityLevel: "high"
    });
    saveToSessionStorage("pageHistory", ["/home", "/products", "/cart"]);
    
    // Visualizza dopo il salvataggio
    console.log("\nDopo il salvataggio:");
    displayAllSessionStorage();
    
    // Recupero dei valori
    console.log("\nRecupero valori:");
    const currentUser = getFromSessionStorage("currentUser");
    const isActive = getFromSessionStorage("isActive");
    const sessionConfig = getFromSessionStorage("sessionConfig");
    const pageHistory = getFromSessionStorage("pageHistory");
    const nonExistentValue = getFromSessionStorage("nonEsistente");
    
    // Rimozione di un valore
    console.log("\nRimozione valori:");
    removeFromSessionStorage("pageHistory");
    removeFromSessionStorage("nonEsistente");
    
    // Visualizza dopo la rimozione
    console.log("\nDopo la rimozione:");
    displayAllSessionStorage();
    
    // Svuota il sessionStorage
    console.log("\nSvuotamento del sessionStorage:");
    clearSessionStorage();
    
    // Verifica dopo lo svuotamento
    console.log("\nDopo lo svuotamento:");
    displayAllSessionStorage();
    
    console.log("--- Fine test operazioni sul sessionStorage ---");
}

// Esegui il test
testSessionStorageOperations();