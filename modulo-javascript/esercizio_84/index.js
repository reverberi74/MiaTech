// Gestione degli errori con then e catch
function checkValue(isSuccessful) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccessful) {
                resolve("Operazione completata con successo!");
            } else {
                reject("Errore: Operazione fallita!");
            }
        }, 1000);
    });
}

// se il valore del ceck è impostato su true ritorna Operazione completata con successo! 
// altrimenti: Errore: Operazione fallita!
checkValue(true)
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.error(errorMessage);
    });
