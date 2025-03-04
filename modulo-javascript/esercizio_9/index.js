let word;

do {
    word = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (word.length < 5); // Continua finché la parola è più corta di 5 caratteri

console.log("Hai inserito la parola valida:", word);
document.getElementById("risultato").innerHTML = "Hai inserito la parola valida: " +word;