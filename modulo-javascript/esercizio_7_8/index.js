let word = prompt("Inserisci una parola:");
// stampa il risultato in console (sulla pagina aprire la console con ispeziona)
console.log("La lunghrezza della parola inserita è di : " +word.length+" caratteri");
// stampa del risultato pure nella pagina html
document.getElementById("risultato").innerHTML = "La lunghrezza della parola inserita è di : " +word.length+" caratteri";
 