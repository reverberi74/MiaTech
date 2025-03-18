// Destructuring con valori predefiniti
 
const numeri = [15, 28, 38];

const [primo, secondo, terzo, quarto = 56, quinto = 78 ] = numeri;

console.log("Primo numero:", primo);  // Output: Primo numero: 15
console.log("Secondo numero:", secondo);  // Output: Secondo numero: 28
console.log("Terzo numero:", terzo);  // Output: Primo numero: 35
console.log("Quarto numero:", quarto);  // Output: Secondo numero: 56
console.log("Quinto numero:", quinto);  // Output: Secondo numero: 78