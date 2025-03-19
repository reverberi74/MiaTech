// Conversione di un oggetto in una stringa JSON
const utente = {
    nome: "Luca",
    cognome: "Calvo",
    età: 25,
    email: "luca.calvo@gmail.com",
};

const jsonString = JSON.stringify(utente);

console.log(jsonString);
