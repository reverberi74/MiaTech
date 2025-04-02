// Gestire i cookies
/**
 * Script per la gestione dei cookie: salvataggio, recupero e rimozione
 * con stampa dei valori nella console durante ogni operazione
 */

// Funzione per impostare un cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(`Cookie impostato: ${name} = ${value} (scade in ${days} giorni)`);
}

// Funzione per recuperare un cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cname) === 0) {
            const value = cookie.substring(cname.length, cookie.length);
            console.log(`Cookie recuperato: ${name} = ${value}`);
            return value;
        }
    }
    console.log(`Cookie non trovato: ${name}`);
    return "";
}

// Funzione per eliminare un cookie
function deleteCookie(name) {
    // Per eliminare un cookie, impostiamo la data di scadenza nel passato
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log(`Cookie eliminato: ${name}`);
}

// Funzione per visualizzare tutti i cookie presenti
function displayAllCookies() {
    const decodedCookie = decodeURIComponent(document.cookie);
    console.log("Tutti i cookie presenti:");
    
    if (decodedCookie.trim() === "") {
        console.log("Nessun cookie presente");
        return;
    }
    
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        console.log(cookieArray[i].trim());
    }
}

// Esempio di utilizzo
function testCookieOperations() {
    console.log("--- Inizio test operazioni sui cookie ---");
    
    // Visualizza i cookie iniziali
    console.log("Stato iniziale:");
    displayAllCookies();
    
    // Imposta alcuni cookie
    setCookie("username", "mario_rossi", 7);
    setCookie("preferenceTheme", "dark", 30);
    setCookie("sessionId", "xyz123456", 1);
    
    // Visualizza tutti i cookie dopo l'impostazione
    console.log("\nDopo l'impostazione:");
    displayAllCookies();
    
    // Recupera i valori dei cookie
    console.log("\nRecupero valori:");
    const username = getCookie("username");
    const theme = getCookie("preferenceTheme");
    const sessionId = getCookie("sessionId");
    const nonExistentCookie = getCookie("nonEsistente");
    
    // Elimina un cookie
    console.log("\nEliminazione cookie:");
    deleteCookie("sessionId");
    
    // Verifica l'eliminazione
    console.log("\nDopo l'eliminazione:");
    displayAllCookies();
    
    console.log("--- Fine test operazioni sui cookie ---");
}

// Esegui il test
testCookieOperations();