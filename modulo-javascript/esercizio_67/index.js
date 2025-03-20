// Utilizzare console.table e console.group
// Array di oggetti con dati di esempio
const persone = [
    { id: 1, nome: "Alba", cognome: "Contino", età: 55 },
    { id: 2, nome: "Luca", cognome: "Calvo", età: 50 },
    { id: 3, nome: "Sapphire", cognome: "Dona", età: 54 }
];

// Stampa l'array in formato tabella
console.table(persone);
/* output:
┌─────────┬────┬────────────┬───────────┬─────┐
│ (index) │ id │ nome       │ cognome   │ età │
├─────────┼────┼────────────┼───────────┼─────┤
│ 0       │ 1  │ 'Alba'     │ 'Contino' │ 55  │
│ 1       │ 2  │ 'Luca'     │ 'Calvo'   │ 50  │
│ 2       │ 3  │ 'Sapphire' │ 'Dona'    │ 54  │
└─────────┴────┴────────────┴───────────┴─────┘
*/ 

// Utilizzo di console.group per raggruppare i messaggi
console.group("Dettagli sulle persone");
persone.forEach(persona => {
    console.groupCollapsed(`ID: ${persona.id} - ${persona.nome} ${persona.cognome}`);
    console.log(`Nome: ${persona.nome}`);
    console.log(`Cognome: ${persona.cognome}`);
    console.log(`Età: ${persona.età}`);
    console.groupEnd();
});
console.groupEnd();
/* output:
Dettagli sulle persone
  ID: 1 - Alba Contino
    Nome: Alba
    Cognome: Contino
    Età: 55
  ID: 2 - Luca Calvo
    Nome: Luca
    Cognome: Calvo
    Età: 50
  ID: 3 - Sapphire Dona
    Nome: Sapphire
    Cognome: Dona
    Età: 54
*/ 
/*note:
console.table(persone) formatta i dati in una tabella leggibile.
console.group("Nome del gruppo") permette di organizzare i messaggi in una sezione espandibile/collassabile.
console.groupCollapsed() invece di console.group() mantiene i gruppi chiusi di default.
console.groupEnd() chiude il gruppo.*/
