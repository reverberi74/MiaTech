// Utilizzare un'API che supporta CORS
async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts/1"; // API che supporta CORS

    try {
        const response = await fetch(url); // Effettua la richiesta GET
        if (!response.ok) {
            throw new Error(`Errore HTTP! Status: ${response.status}`);
        }
        const data = await response.json(); // Converte la risposta in JSON
        console.log("Dati ricevuti:", data);
    } catch (error) {
        console.error("Errore durante la richiesta:", error);
    }
}

fetchData();
/*
output:
Dati ricevuti: {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
*/ 