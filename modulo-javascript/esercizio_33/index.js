// Sottoclasse Elettrica
// Classe base Automobile
class Automobile {
    constructor(marca, modello, anno, chilometraggio = 0) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    descrizione() {
        return `Auto: ${this.marca} ${this.modello}, Anno: ${this.anno}, Chilometraggio: ${this.chilometraggio} km`;
    }

    aggiungiChilometri(km) {
        this.chilometraggio += km;
    }

    mostraChilometraggio() {
        return `Chilometraggio attuale: ${this.chilometraggio} km`;
    }
}

// Sottoclasse Elettrica che estende Automobile
class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia; // Nuova proprietà per la batteria
    }

    // Sovrascrivo descrizione per includere autonomia
    descrizione() {
        return `${super.descrizione()}, Autonomia: ${this.autonomia} km`;
    }

    // Metodo per ricaricare la batteria
    ricarica(km) {
        this.autonomia += km;
        console.log(`Batteria ricaricata di ${km} km. Nuova autonomia: ${this.autonomia} km`);
    }
}

// Creiamo un'auto elettrica
const citroen = new Elettrica("Citroen", "e-C3", 2024, 5000, 800);

console.log(citroen.descrizione()); // output: Auto: Citroen e-C3, Anno: 2024, Chilometraggio: 5000 km, Autonomia: 800 km
citroen.aggiungiChilometri(400);
console.log(citroen.mostraChilometraggio()); // output: Chilometraggio attuale: 5400 km
citroen.ricarica(50); // output: Batteria ricaricata di 50 km. Nuova autonomia: 850 km
console.log(citroen.descrizione()); // Verifica aggiornamento: Auto: Citroen e-C3, Anno: 2024, Chilometraggio: 5400 km, Autonomia: 850 km
