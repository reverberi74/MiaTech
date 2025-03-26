// Funzione di base callback
function sommaEsegueCallback(a, b, callback) {
    // Eseguiamo la somma
    const risultato = a + b;
    
    // Stampiamo il risultato
    console.log(`Il risultato della somma è: ${risultato}`);
    
    // Eseguiamo il callback
    // Controlla se il callback è una funzione valida e lo esegue passando il risultato.
    if (typeof callback === "function") {
        callback(risultato);
    } else {
        console.log("Nessun callback fornito.");
    }
}

// Quando chiamiamo la funzione con sommaEsegueCallback(5, 10, callback),
// il callback riceve il risultato della somma (15) e lo utilizza.
sommaEsegueCallback(5, 10, (res) => {
    console.log(`Callback eseguito dopo la somma! Il risultato ricevuto è: ${res}`);
});
/*
output:
Il risultato della somma è: 15
Callback eseguito dopo la somma! Il risultato ricevuto è: 15
*/ 