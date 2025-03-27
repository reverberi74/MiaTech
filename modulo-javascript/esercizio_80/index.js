// Catena di promise semplici
function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5); // Dopo 1 secondo restituisce il numero 5
        }, 1000);
    });
}
// Catena di then per elaborare il numero
getNumber()
    .then((num) => {
        console.log(`Numero iniziale: ${num}`); // Stampa il valore iniziale
        const result = num * 2;
        console.log(`Dopo moltiplicazione: ${result}`);
        return result;
    })
    .then((num) => {
        const result = num + 3;
        console.log(`Dopo somma: ${result}`);
        return result;
    })
    .then((finalResult) => {
        console.log(`Risultato finale: ${finalResult}`);
    });
/*
output:
Numero iniziale: 5
Dopo moltiplicazione: 10
Dopo somma: 13
Risultato finale: 13
*/


 