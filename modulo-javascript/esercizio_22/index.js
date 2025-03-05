// Funzioni annidate
function outerFunction (x){
    function innerFunction (y){
        return x + y;
    }
    return innerFunction;
}
// Esempio di utilizzo
const add5 = outerFunction(5); // Restituisce innerFunction con x = 5
console.log(add5(3)); // Output: 8 (5 + 3)

const add10 = outerFunction(10);
console.log(add10(7)); // Output: 17 (10 + 7)

// metodo compatto
console.log(outerFunction(8)(9)); // Output: 17
console.log(outerFunction(12)(7)); // Output: 19