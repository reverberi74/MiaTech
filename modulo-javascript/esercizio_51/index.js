// Destructuring con nomi di variabili diversi
const persona = {
    nome: "Luca",
    cognome: "Calvo",
    età: 50,
    città: "Siracusa"
};

// Destructuring con rinominazione delle variabili
const { nome: firstName, città: city } = persona;

console.log("First Name:", firstName); // Output: First Name: Luca
console.log("City:", city);            // Output: City: Siracusa