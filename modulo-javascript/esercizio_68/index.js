// Utilizzare setTimeout
// Dichiarazione della funzione che stampa il messaggio
function mostraMessaggio() {
    console.log("Messaggio stampato dopo 3 secondi!");
}

// Utilizzo di setTimeout per chiamare la funzione dopo 3000ms (3 secondi)
setTimeout(mostraMessaggio, 3000);
/* questo messaggio viene stampato immediatamente e dimostra come setTimeout funzioni
   in modo asincrono: il codice continua a essere eseguito senza aspettare il ritardo di setTimeout.*/
console.log("Attendere 3 secondi per il messaggio...");
