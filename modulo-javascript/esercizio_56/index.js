// Funzione con parametri variabili
// Funzione che accetta un numero variabile di argomenti e ne calcola la somma
/*
reduce() → Somma tutti gli elementi dell'array:
acc → Valore accumulato.
num → Valore corrente dell'iterazione.
0 → Valore iniziale della somma.
La funzione può essere chiamata con qualsiasi numero di argomenti, inclusi zero argomenti.*/ 
const somma = (...numeri) => {
    return numeri.reduce((acc, num) => acc + num, 0);
};

// Chiamate della funzione con diversi numeri di argomenti
console.log(somma(11, 2, 6));          // Output: 19
console.log(somma(10, 20, 30, 40));   // Output: 100
console.log(somma());                 // Output: 0 (nessun numero passato)
console.log(somma(5));                // Output: 5
console.log(somma(8, -2, -7, 6, 10));  // Output: 15