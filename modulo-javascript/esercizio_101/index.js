// Utilizzare localStorage e sessionStorage insieme
/**
 * Script per la gestione di localStorage e sessionStorage:
 * Salvataggio, recupero e rimozione con output nella console
 */

// FUNZIONI PER IL LOCAL STORAGE
// ============================

// Salva un valore nel localStorage
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`[localStorage] Salvato: ${key} = `, value);
    } catch (error) {
        console.error(`[localStorage] Errore nel salvare: ${error.message}`);
    }
}

// Recupera un valore dal localStorage
function getFromLocalStorage(key) {
    try {
        const value = localStorage.getItem(key);
        if (value === null) {
            console.log(`[localStorage] Non trovato: ${key}`);
            return null;
        }
        
        const parsedValue = JSON.parse(value);
        console.log(`[localStorage] Recuperato: ${key} = `, parsedValue);
        return parsedValue;
    } catch (error) {
        console.error(`[localStorage] Errore nel recuperare: ${error.message}`);
        return null;
    }
}

// Rimuovi un valore dal localStorage
function removeFromLocalStorage(key) {
    try {
        if (localStorage.getItem(key) === null) {
            console.log(`[localStorage] Impossibile rimuovere: ${key} non trovato`);
            return false;
        }
        
        localStorage.removeItem(key);
        console.log(`[localStorage] Rimosso: ${key}`);
        return true;
    } catch (error) {
        console.error(`[localStorage] Errore nella rimozione: ${error.message}`);
        return false;
    }
}

// Visualizza tutti i valori nel localStorage
function displayLocalStorage() {
    console.log("\n=== CONTENUTO DEL LOCAL STORAGE ===");
    
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

// FUNZIONI PER IL SESSION STORAGE
// ==============================

// Salva un valore nel sessionStorage
function saveToSessionStorage(key, value) {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
        console.log(`[sessionStorage] Salvato: ${key} = `, value);
    } catch (error) {
        console.error(`[sessionStorage] Errore nel salvare: ${error.message}`);
    }
}

// Recupera un valore dal sessionStorage
function getFromSessionStorage(key) {
    try {
        const value = sessionStorage.getItem(key);
        if (value === null) {
            console.log(`[sessionStorage] Non trovato: ${key}`);
            return null;
        }
        
        const parsedValue = JSON.parse(value);
        console.log(`[sessionStorage] Recuperato: ${key} = `, parsedValue);
        return parsedValue;
    } catch (error) {
        console.error(`[sessionStorage] Errore nel recuperare: ${error.message}`);
        return null;
    }
}

// Rimuovi un valore dal sessionStorage
function removeFromSessionStorage(key) {
    try {
        if (sessionStorage.getItem(key) === null) {
            console.log(`[sessionStorage] Impossibile rimuovere: ${key} non trovato`);
            return false;
        }
        
        sessionStorage.removeItem(key);
        console.log(`[sessionStorage] Rimosso: ${key}`);
        return true;
    } catch (error) {
        console.error(`[sessionStorage] Errore nella rimozione: ${error.message}`);
        return false;
    }
}

// Visualizza tutti i valori nel sessionStorage
function displaySessionStorage() {
    console.log("\n=== CONTENUTO DEL SESSION STORAGE ===");
    
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

// FUNZIONI COMBINATE
// ================

// Salva lo stesso valore in entrambi gli storage
function saveToAllStorage(key, value) {
    console.log(`\nSalvataggio di "${key}" in entrambi gli storage:`);
    saveToLocalStorage(key, value);
    saveToSessionStorage(key, value);
}

// Recupera un valore da entrambi gli storage
function getFromAllStorage(key) {
    console.log(`\nRecupero di "${key}" da entrambi gli storage:`);
    const localValue = getFromLocalStorage(key);
    const sessionValue = getFromSessionStorage(key);
    
    return {
        localValue,
        sessionValue,
        areEqual: JSON.stringify(localValue) === JSON.stringify(sessionValue)
    };
}

// Rimuove un valore da entrambi gli storage
function removeFromAllStorage(key) {
    console.log(`\nRimozione di "${key}" da entrambi gli storage:`);
    const localRemoved = removeFromLocalStorage(key);
    const sessionRemoved = removeFromSessionStorage(key);
    
    return {
        localRemoved,
        sessionRemoved,
        fullyRemoved: localRemoved && sessionRemoved
    };
}

// Svuota entrambi gli storage
function clearAllStorage() {
    console.log("\nSvuotamento di entrambi gli storage:");
    localStorage.clear();
    console.log("[localStorage] Completamente svuotato");
    sessionStorage.clear();
    console.log("[sessionStorage] Completamente svuotato");
}

// Visualizza il contenuto di entrambi gli storage
function displayAllStorage() {
    displayLocalStorage();
    displaySessionStorage();
}

// TEST COMPLETO DI TUTTE LE OPERAZIONI
// ==================================

function runStorageTest() {
    console.log("===== INIZIO TEST DI STORAGE =====");
    
    // Stato iniziale
    console.log("\nStato iniziale degli storage:");
    displayAllStorage();
    
    // Test 1: Salvataggio negli storage
    console.log("\n--- TEST 1: SALVATAGGIO ---");
    // Dati comuni
    saveToAllStorage("username", "mariorossi");
    saveToAllStorage("preferences", { theme: "dark", notifications: true });
    
    // Dati specifici per localStorage (persistenti)
    saveToLocalStorage("savedArticles", ["articolo1", "articolo2", "articolo3"]);
    saveToLocalStorage("authToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");
    
    // Dati specifici per sessionStorage (temporanei per la sessione)
    saveToSessionStorage("currentPage", "/dashboard");
    saveToSessionStorage("formData", { name: "Mario", email: "mario@example.com" });
    
    // Visualizza dopo il salvataggio
    console.log("\nDopo il salvataggio:");
    displayAllStorage();
    
    // Test 2: Recupero dagli storage
    console.log("\n--- TEST 2: RECUPERO ---");
    // Recupero da entrambi
    const usernameResult = getFromAllStorage("username");
    console.log(`I valori di username sono uguali: ${usernameResult.areEqual}`);
    
    // Recupero specifico
    const articles = getFromLocalStorage("savedArticles");
    const currentPage = getFromSessionStorage("currentPage");
    
    // Recupero di valore non esistente
    getFromAllStorage("nonExistente");
    
    // Test 3: Rimozione dagli storage
    console.log("\n--- TEST 3: RIMOZIONE ---");
    // Rimozione da entrambi
    const prefsRemovalResult = removeFromAllStorage("preferences");
    console.log(`Preferences completamente rimosso: ${prefsRemovalResult.fullyRemoved}`);
    
    // Rimozione specifica
    removeFromLocalStorage("authToken");
    removeFromSessionStorage("formData");
    
    // Visualizza dopo la rimozione
    console.log("\nDopo la rimozione:");
    displayAllStorage();
    
    // Test 4: Pulizia completa
    console.log("\n--- TEST 4: PULIZIA COMPLETA ---");
    clearAllStorage();
    
    // Visualizza dopo la pulizia
    console.log("\nDopo la pulizia completa:");
    displayAllStorage();
    
    console.log("\n===== FINE TEST DI STORAGE =====");
}

// Esegui il test completo
runStorageTest();