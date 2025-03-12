// Autobobile
class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    descrizione() {
        return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }
}

// Creazione di un'istanza della classe Automobile
const miaAuto = new Automobile("Fiat", "Uno", 2016);

// Stampa della descrizione dell'automobile
console.log(miaAuto.descrizione()); // Output: Questa automobile è una Fiat Uno del 2016.