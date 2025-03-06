// forEach & map
const numbers = [1, 2, 3, 4, 5];

// Usare forEach per stampare ogni numero moltiplicato per 2
console.log("Gli elementi dell'array moltiplicati per 2 sono: ");
numbers.forEach(num => console.log(num * 2));

// Usare map per creare un nuovo array con i quadrati dei numeri
const squaredNumbers = numbers.map(num => num ** 2);
console.log("L'array contenente il quadrato degli elementi è: ");
// Stampare il nuovo array squaredNumbers
console.log(squaredNumbers);