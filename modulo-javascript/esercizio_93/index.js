// Eseguire una richiesta POST
async function sendData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Nuovo Post",
                body: "Questo è il contenuto del post.",
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }

        const data = await response.json();
        console.log("Risposta dall'API:", data);
    } catch (error) {
        console.error("Si è verificato un errore:", error);
    }
}

// Chiamata della funzione
sendData();
/*
output:
Risposta dall'API: {
  title: 'Nuovo Post',
  body: 'Questo è il contenuto del post.',
  userId: 1,
  id: 101
}
*/