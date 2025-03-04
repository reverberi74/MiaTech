let parole = []; // Creazione dell'array vuoto
let numeroParole = parseInt(prompt("Quante parole vuoi inserire?")); // Chiede il numero di parole

for (let i = 0; i < numeroParole; i++) {
    let parola = prompt(`Inserisci la parola ${i + 1}:`); // Chiede all'utente una parola
    parole.push(parola); // Aggiunge la parola all'array
}

// Seleziona il div con id "output"
let outputDiv = document.getElementById("output");

// Filtra e stampa solo le parole con un numero dispari di lettere
let risultato = "<ul>"; // Inizia una lista HTML
parole.forEach(parola => {
    if (parola.length % 2 !== 0) {
        console.log(parola); // Stampa in console
        risultato += `<li>${parola}</li>`; // Aggiunge la parola alla lista HTML
    }
});
risultato += "</ul>"; // Chiude la lista

// Scrive il risultato nel div della pagina
outputDiv.innerHTML = risultato;
