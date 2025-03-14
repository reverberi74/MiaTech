// Camion, Carico Massimo
class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this._chilometraggio = chilometraggio; // Proprietà privata convenzionale
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
}

// Classe Camion che estende Automobile
class Camion extends Automobile {
    constructor(marca, modello, anno, chilometraggio, caricoMassimo) {
        super(marca, modello, anno, chilometraggio); // Richiama il costruttore della superclasse
        this.caricoMassimo = caricoMassimo; // Capacità massima di carico in kg
        this.caricoAttuale = 0; // Inizialmente il camion è vuoto
    }

    // Sovrascrive il metodo descrizione per includere il carico massimo
    descrizione() {
        return `Camion: ${this.marca} ${this.modello}, Anno: ${this.anno}, Chilometraggio: ${this.chilometraggio} km, Carico massimo: ${this.caricoMassimo} kg, Carico attuale: ${this.caricoAttuale} kg`;
    }

    // Metodo per caricare il camion
    carica(kg) {
        if (this.caricoAttuale + kg <= this.caricoMassimo) {
            this.caricoAttuale += kg;
            console.log(`Carico aggiunto: ${kg} kg. Carico attuale: ${this.caricoAttuale} kg.`);
        } else {
            console.log(`Errore: Il carico supera il limite massimo di ${this.caricoMassimo} kg!`);
        }
    }
}

const mioCamion = new Camion("Iveco", "T-Way", 2022, 30000, 20000);
console.log(mioCamion.descrizione()); //Camion: Iveco T-Way, Anno: 2022, Chilometraggio: 30000 km, Carico massimo: 20000 kg, Carico attuale: 0 kg

mioCamion.carica(5000); // Carico aggiunto: 5000 kg. Carico attuale: 5000 kg.
mioCamion.carica(15000); // Carico aggiunto: 15000 kg. Carico attuale: 20000 kg.
mioCamion.carica(1000); // Errore: Il carico supera il limite massimo di 20000 kg!

console.log(mioCamion.descrizione()); // Camion: Iveco T-Way, Anno: 2022, Chilometraggio: 30000 km, Carico massimo: 20000 kg, Carico attuale: 20000 kg
