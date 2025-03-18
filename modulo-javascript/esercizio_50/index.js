// Estrazione di proprietà base
// Dichiarazione di un oggetto
const persona = {
    nome: "Luca",
    cognome: "Calvo",
    età: 50,
    città: "Siracusa"
};

// Destructuring per estrarre alcune proprietà in variabili separate
const { nome,età} = persona;

// Stampa delle variabili nella console
console.log("Nome:", nome);  // Output: Nome: Luca
console.log("Età:", età);    // Output: Età: 50
 
 