// Counter
function createCounter() {
    let count = 0; // Variabile locale privata

    return {
        increment: function () {
            count++; // Aumenta count di 1
            return count;
        },
        decrement: function () {
            count--; // Diminuisce count di 1
            return count;
        }
    };
}

// Esempio di utilizzo
const counter = createCounter();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.decrement()); // Output: 0
