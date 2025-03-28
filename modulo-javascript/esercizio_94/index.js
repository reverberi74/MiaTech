// Gestione degli errori con async e await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dati ricevuti:", data);
    } catch (error) {
        console.error("Si è verificato un errore:", error.message);
    }
}

// Chiamata della funzione
fetchData();
/*
output con successo:
Dati ricevuti: {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit suscipit..."
}
*/ 
/*
output con errore con link tagliato appositamente:
Si è verificato un errore: fetch failed
*/ 