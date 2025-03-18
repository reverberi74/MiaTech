// Unione di due array
// Dichiarazione di due array di numeri
const numeri1 = [12, 22, 33];
const numeri2 = [44, 55, 66];

// Unione degli array usando lo spread operator
const arrayUnito = [...numeri1, ...numeri2];

console.log("Array unito:", arrayUnito);  // Output: Array unito: [12, 22, 33, 44, 55, 66]
