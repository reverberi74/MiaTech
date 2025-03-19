// Destructuring oggetto con rest operator
const persona = {
    nome: "Luca",
    cognome: "Calvo",
    età: 50,
    città: "Rosolini",
    professione: "Sviluppatore",
};

const { nome, cognome, ...altreInfo } = persona;

console.log("Nome:", nome);         // Luca
console.log("Cognome:", cognome);   // Calvo
console.log("Altre informazioni:", altreInfo);
// { età: 50, città: 'Rosolini', professione: 'Sviluppatore' }
