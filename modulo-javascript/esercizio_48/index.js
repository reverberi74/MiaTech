// Saltare elementi durante il destructuring 
// Dichiarazione di un array di numeri
const numeri = [15, 28, 38, 45, 56];

// Destructuring per assegnare il primo ed il terzo elemento saltando il secondo
const [primo, ,terzo] = numeri;

// Stampa delle variabili nella console
console.log("Primo numero:", primo);  // Output: Primo numero: 15
console.log("Terzo numero:", terzo);  // Output: Secondo numero: 38