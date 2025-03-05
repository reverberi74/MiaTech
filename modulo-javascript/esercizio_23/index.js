// Persistenza Variabili Locali
function outerFunction(x, initialValue) {
    let result = initialValue; // Memorizza il valore iniziale

    function innerFunction(y) {
        result += y; // Aggiunge y a result
        return result; // Restituisce il nuovo valore di result
    }

    return innerFunction;
}

// Esempio di utilizzo
const adder = outerFunction(5, 10); // x = 5 (non usato), initialValue = 10
console.log(adder(3)); // Output: 13 (10 + 3)
console.log(adder(7)); // Output: 20 (13 + 7)
console.log(adder(2)); // Output: 22 (20 + 2)
