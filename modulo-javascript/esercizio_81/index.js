// Catena di promise con condizioni
function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 100); // Genera un numero casuale tra 0 e 99
            resolve(num);
        }, 1000);
    });
}

getNumber()
    .then((num) => {
        console.log(`Numero generato: ${num}`);
        if (num % 2 === 0) {
            return num / 2; // Se è pari, lo dividiamo per 2
        } else {
            return num * 3 + 1; // Se è dispari, lo moltiplichiamo per 3 e aggiungiamo 1
        }
    })
    .then((result) => {
        console.log(`Risultato finale: ${result}`);
    });
/*
output con numero pari:
Numero generato: 84
Risultato finale: 42
output con numero dispari:
Numero generato: 91
Risultato finale: 274
*/ 