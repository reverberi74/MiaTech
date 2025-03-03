// Scoping delle variabili
let outside = 25;
{
    let inside = 45;
    console.log("La variabile outside dentro il blocco vale "+outside);
    console.log("La variabile insiede dentro il blocco vale "+inside);
}
console.log("La variabile outside fuori il blocco vale "+outside);
console.log("La variabile insiede fuori il blocco vale "+inside);

/* considerazioni: all'interno di un blocco possiamo leggere le variabili dichiarate all'esterno, 
    ma all'esterno di un blocco non possiamo leggere le sue variabili dichiarate all'interno*/