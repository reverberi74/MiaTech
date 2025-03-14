// Getter, Setter
class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this._chilometraggio = chilometraggio; // Proprietà privata con underscore
    }

    // Getter per ottenere il chilometraggio attuale
    get chilometraggio() {
        return this._chilometraggio;
    }

    // Setter per aggiornare il chilometraggio, solo se il nuovo valore è maggiore o uguale
    set chilometraggio(nuovoValore) {
        if (nuovoValore >= this._chilometraggio) {
            this._chilometraggio = nuovoValore;
        } else {
            console.log("Errore: Il chilometraggio non può diminuire!");
        }
    }
}

// Test della classe
const miaAuto = new Automobile("Ford", "Fiesta", 2020, 60000);
console.log(miaAuto.chilometraggio); // Output: 60000

miaAuto.chilometraggio = 65000; // OK, il valore  
console.log(miaAuto.chilometraggio); // Output: 6500

miaAuto.chilometraggio = 40000; // Errore, non può diminuire
console.log(miaAuto.chilometraggio); // Output: 6500 (rimane invariato)
