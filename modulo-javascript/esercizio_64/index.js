// Funzione e template literals
// Funzione che accetta un oggetto persona e restituisce una stringa formattata
function formattaPersona(persona) {
    return `
Nome: ${persona.nome}
Cognome: ${persona.cognome}
Età: ${persona.eta} anni
Città: ${persona.citta}
`;
}

// Oggetto di esempio
const personaTipo = {
    nome: "Luca",
    cognome: "Calvo",
    eta: 50,
    citta: "Siracusa"
};

// Chiamata della funzione e stampa del risultato
console.log(formattaPersona(personaTipo));
/*
Output:
Nome: Luca
Cognome: Calvo
Età: 50 anni
Città: Siracusa
*/
