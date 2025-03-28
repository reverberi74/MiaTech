// Funzioni asincrone in serie
// Funzione che restituisce una promise risolta dopo 2 secondi
async function funzione1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Risultato 1"), 2000);
    });
}

// Funzione che restituisce una promise risolta dopo 3 secondi
async function funzione2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Risultato 2"), 3000);
    });
}

// Funzione asincrona che chiama le prime due in serie
async function eseguiInSerie() {
    console.log("Inizio esecuzione...");

    const risultato1 = await funzione1();
    console.log("Funzione 1 completata:", risultato1);

    const risultato2 = await funzione2();
    console.log("Funzione 2 completata:", risultato2);

    console.log("Tutte le operazioni completate!");
}

// Chiamata alla funzione principale
eseguiInSerie();

/*
output:
Inizio esecuzione...
Funzione 1 completata: Risultato 1
Funzione 2 completata: Risultato 2
Tutte le operazioni completate!
*/ 