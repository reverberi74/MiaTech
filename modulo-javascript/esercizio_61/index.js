// Manipolazione di dati JSON
// Dichiarazione della stringa JSON contenente una lista di persone
const jsonString = `[
    {"nome": "Marco", "cognome": "Meli", "età": 40, "email": "marco.meli@gmail.com"},
    {"nome": "Anna", "cognome": "Marzana", "età": 45, "email": "anna.marzana@gmail.com"},
    {"nome": "Peppe", "cognome": "Pisana", "età": 46, "email": "peppe.pisana@alice.it"}
]`;

// Conversione della stringa JSON in un array di oggetti JavaScript
const persone = JSON.parse(jsonString);

// Aggiunta di una nuova persona all'array
persone.push({
    nome: "Luca",
    cognome: "Calvo",
    età: 50,
    email: "luca.calvo@alice.it"
});

// Riconversione dell'array aggiornato in una stringa JSON
// JSON.stringify(persone, null, 4) formatta il JSON con 4 spazi per renderlo più leggibile.
const jsonStringAggiornato = JSON.stringify(persone, null, 4);

// Stampa della stringa JSON aggiornata
console.log(jsonStringAggiornato);
/* output:
[
    {
        "nome": "Marco",
        "cognome": "Meli",
        "età": 40,
        "email": "marco.meli@gmail.com"
    },
    {
        "nome": "Anna",
        "cognome": "Marzana",
        "età": 45,
        "email": "anna.marzana@gmail.com"
    },
    {
        "nome": "Peppe",
        "cognome": "Pisana",
        "età": 46,
        "email": "peppe.pisana@alice.it"
    },
    {
        "nome": "Luca",
        "cognome": "Calvo",
        "età": 50,
        "email": "luca.calvo@alice.it"
    }
]*/
