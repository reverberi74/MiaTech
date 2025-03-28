// Utilizzare un proxy per bypassare CORS
async function fetchWithProxy() {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy pubblico
    const targetUrl = "https://www.google.com"; // URL che non supporta CORS

    try {
        const response = await fetch(proxyUrl + targetUrl);
        const data = await response.text(); // Converti la risposta in testo
        console.log("Dati ricevuti:", data);
    } catch (error) {
        console.error("Errore durante la richiesta:", error);
    }
}

fetchWithProxy();
/*
output:
Dati ricevuti: See /corsdemo for more info
*/