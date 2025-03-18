// Copia di un array
// Dichiarazione di un array di numeri
const numeri = [15, 26, 34, 45, 52];

// Creazione di una copia usando lo spread operator
const copiaNumeri = [...numeri];

// Modifica dell'array originale
numeri.push(68);

console.log("Array originale:", numeri);  // Output: Array originale: [15, 26, 34, 45, 52, 68]
console.log("Copia dell'array:", copiaNumeri); // Output: Copia dell'array: [15, 26, 34, 45, 52]
// La copia rimane invariata, dimostrando che è un'istanza separata.