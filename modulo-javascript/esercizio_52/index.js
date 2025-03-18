// Destructuring con valori predefiniti
const persona = {
    nome: "Luca",
    cognome: "Calvo",
    età: 50,
};

// Destructuring con valori predefiniti
const { nome, cognome, età, cf = "Sconosciuto", datanascita = "N/A"} = persona;

console.log("Nome:", nome);       // Output: Nome: Luca
console.log("Cognome:", cognome); // Output: Cognome: Calvo
console.log("Età:", età);         // Output: Età: 50
console.log("Codice Fiscale:", cf);     // Output: Codice Fiscale: Sconosciuto
console.log("Data Nascita:", datanascita);     // Output: Data Nascita: N/A
