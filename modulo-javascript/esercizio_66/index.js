// Utilizzare console.error e console.warm
// Dichiarazione della variabile
let stato = "errore"; 
// let stato = "attenzione";


// Controllo dello stato della variabile
if (stato === "errore") {
    console.error("Errore critico! Qualcosa è andato storto.");
} else if (stato === "attenzione") {
    console.warn("Attenzione: Potrebbe esserci un problema.");
} else {
    console.log("Tutto ok! Nessun errore rilevato.");
}
/*
output:
Errore critico! Qualcosa è andato storto. (se stato = "errore")
Attenzione: Potrebbe esserci un problema. (se stato = "attenzione")
Tutto ok! Nessun errore rilevato. (se stato = "altro")*/ 

/*
console.error() mostra un messaggio di errore critico, spesso usato per eccezioni o bug gravi.
console.warn() mostra un avviso, utile per segnalare potenziali problemi.
console.log() è usato per un messaggio normale se non ci sono problemi.
*/ 





