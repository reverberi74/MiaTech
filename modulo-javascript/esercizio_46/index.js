// Verifica Istanza

class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this._chilometraggio = chilometraggio;
    }

    get chilometraggio() {
        return this._chilometraggio;
    }

    set chilometraggio(nuovoValore) {
        if (nuovoValore >= this._chilometraggio) {
            this._chilometraggio = nuovoValore;
        } else {
            console.log("Errore: Il chilometraggio non può diminuire!");
        }
    }

    descrizione() {
        return `Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}, Chilometraggio: ${this.chilometraggio} km`;
    }

    // Metodo statico per verificare l'istanza di una classe
    static verificaIstanza(obj, classe) {
        if (obj instanceof classe) {
            return `L'oggetto è un'istanza della classe ${classe.name}.`;
        } else {
            return `L'oggetto NON è un'istanza della classe ${classe.name}.`;
        }
    }
}

// Classe Camion che estende Automobile
class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, caricoMassimo) {
        super(marca, modello, anno, chilometraggio);
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = 0;
    }

    descrizione() {
        return `Camion: ${this.marca} ${this.modello}, Anno: ${this.anno}, Chilometraggio: ${this.chilometraggio} km, Carico massimo: ${this.caricoMassimo} kg, Carico attuale: ${this.caricoAttuale} kg`;
    }

    carica(kg) {
        if (this.caricoAttuale + kg <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Carico aggiunto: ${kg} kg. Carico attuale: ${this.caricoAttuale} kg.`);
        } else {
            console.log(`Errore: Il carico supera il limite massimo di ${this.caricoMassimo} kg!`);
        }
    }
}

// Creazione delle 2 istanze
const miaAuto = new Automobile("Fiat", "Uno", 2020, 50000);
const mioCamion = new Camion("Iveco", "T-Way", 2022, 30000, 20000);

// Verifica con instanceof
console.log(miaAuto instanceof Automobile); // true
console.log(mioCamion instanceof Automobile); // true (perché eredita da Automobile)
console.log(mioCamion instanceof Camion); // true
console.log(miaAuto instanceof Camion); // false

// Utilizzo del metodo statico verificaIstanza() che ritorna true e quindi il messaggio appropriato se l'oggetto appartiene alla sua classe, false altrimenti.
console.log(Automobile.verificaIstanza(miaAuto, Automobile)); // L'oggetto è un'istanza della classe Automobile.
console.log(Automobile.verificaIstanza(mioCamion, Automobile)); // L'oggetto è un'istanza della classe Automobile.
console.log(Automobile.verificaIstanza(mioCamion, Camion)); // L'oggetto è un'istanza della classe Camion.
console.log(Automobile.verificaIstanza(miaAuto, Camion)); // L'oggetto NON è un'istanza della classe Camion.
