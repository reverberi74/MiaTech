// Copia di un oggetto con proprietà aggiuntive
// Dichiarazione di un oggetto
const persona = {
    nome: "Luca",
    cognome: "Calvo",
    età: 50
};

// Creazione di una copia dell'oggetto aggiungendo nuove proprietà
const nuovaPersona = { ...persona, città: "Rosolini", provincia: "Siracusa" };

console.log("Oggetto originale:", persona);
// Output: { nome: 'Luca', cognome: 'Calvo', età: 50 }

console.log("Oggetto copiato e modificato:", nuovaPersona);
// Output: { nome: 'Luca', cognome: 'Calvo', età: 50, città: 'Rosolini', provincia: 'Siracusa' }
