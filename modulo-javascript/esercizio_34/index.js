// Saluta
// Definizione della classe Automobile
class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    descrizione() {
        return `${this.marca} ${this.modello} del ${this.anno}`;
    }
}

// Aggiunta del metodo saluta() alla prototype chain
Automobile.prototype.saluta = function () {
    return `Ciao! Sono una ${this.marca} ${this.modello}.`;
};

// Creazione di un'istanza
const miaAuto = new Automobile("Fiat", "Uno", 2016);
console.log(miaAuto.saluta()); // Output: Ciao! Sono una Fiat Uno.

// Verifica che il metodo sia accessibile a tutte le istanze
const altraAuto = new Automobile("Ford", "Fiesta", 2018);
console.log(altraAuto.saluta()); // Output: Ciao! Sono una Ford Fiesta.

// Ora creiamo una sottoclasse Elettrica, che estende Automobile, e vediamo se eredita il metodo saluta().
class Elettrica extends Automobile {
    constructor(marca, modello, anno, autonomia) {
        super(marca, modello, anno);
        this.autonomia = autonomia;
    }

    descrizione() {
        return `${super.descrizione()} con un'autonomia di ${this.autonomia} km.`;
    }
}

// Creazione di un'istanza della sottoclasse
const citroen = new Elettrica("Citroen", "e-C3", 2024, 800);

console.log(citroen.saluta()); // Output: Ciao! Sono una Citroen e-C3.
