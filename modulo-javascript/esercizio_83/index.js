// Gestione degli errori con catch
function rejectPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Qualcosa è andato storto!");
        }, 1000);
    });
}

rejectPromise()
    .catch(error => {
        console.error("Messaggio di errore:", error);
    });

    // output: Messaggio di errore: Qualcosa è andato storto!
