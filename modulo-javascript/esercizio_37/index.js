// Confronta Km
class Automobile {
    constructor(marca, modello, anno, chilometraggio) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    // Metodo statico per confrontare il chilometraggio di due automobili
    static confrontaChilometraggio(auto1, auto2) {
        if (!(auto1 instanceof Automobile) || !(auto2 instanceof Automobile)) {
            return "Entrambi i parametri devono essere istanze di Automobile.";
        }

        if (auto1.chilometraggio > auto2.chilometraggio) {
            return `${auto1.marca} ${auto1.modello} ha più chilometri di ${auto2.marca} ${auto2.modello}.`;
        } else if (auto1.chilometraggio < auto2.chilometraggio) {
            return `${auto2.marca} ${auto2.modello} ha più chilometri di ${auto1.marca} ${auto1.modello}.`;
        } else {
            return `${auto1.marca} ${auto1.modello} e ${auto2.marca} ${auto2.modello} hanno lo stesso chilometraggio.`;
        }
    }
}

// Creazione di due (istanze) automobili per il confronto
const auto1 = new Automobile("Nissan", "Leaf", 2022, 50000);
const auto2 = new Automobile("Citroen", "e-C3", 2018, 120000);

// Utilizzo del metodo statico per confrontare il chilometraggio
console.log(Automobile.confrontaChilometraggio(auto1, auto2)); // output: Citroen e-C3 ha più chilometri di Nissan Leaf.
