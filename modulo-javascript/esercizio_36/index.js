// Metodo Protetto
class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    // Metodo protetto: verifica se il chilometraggio supera 100.000 km
    _controllaChilometri() {
        return this.chilometraggio > 100000 ? 
            `Attenzione! Il chilometraggio di ${this.marca} ${this.modello} ha superato i 100.000 km!` : 
            `Chilometraggio nella norma (${this.chilometraggio} km).`;
    }

    // Metodo per aggiungere chilometri
    aggiungiChilometri(km) {
        this.chilometraggio += km;
    }

    // Metodo pubblico per mostrare il chilometraggio attuale
    mostraChilometraggio() {
        return `Chilometraggio attuale: ${this.chilometraggio} km.`;
    }
}

// Sottoclasse Elettrica che estende Automobile
class Elettrica extends Automobile {
    constructor(marca, modello, anno, chilometraggio, autonomia) {
        super(marca, modello, anno, chilometraggio);
        this.autonomia = autonomia;
    }

    // Metodo per ricaricare la batteria
    ricarica(km) {
        this.autonomia += km;
        return `Autonomia aumentata di ${km} km. Ora l'autonomia è di ${this.autonomia} km.`;
    }

    // Sovrascrive il metodo mostraChilometraggio per includere il controllo chilometri
    mostraChilometraggio() {
        return `${super.mostraChilometraggio()} ${this._controllaChilometri()}`;
    }
}

// Caso con chilometraggio basso:
const autoNuova = new Elettrica("Nissan", "Leaf", 2022, 50000, 400);
console.log(autoNuova.mostraChilometraggio()); // Chilometraggio nella norma (50000 km).
// Caso con chilometraggio alto:
const autoVecchia = new Elettrica("Citroen", "e-C3", 2018, 120000, 600);
console.log(autoVecchia.mostraChilometraggio()); // Attenzione! Il chilometraggio di Citroen e-C3 ha superato i 100.000 km!


