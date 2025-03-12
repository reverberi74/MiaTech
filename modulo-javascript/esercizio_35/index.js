// Metodo Privato
class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    // Metodo privato che calcola l'età dell'automobile
    #calcolaEtà() {
        const annoCorrente = new Date().getFullYear();
        return annoCorrente - this.anno;
    }

    // Metodo pubblico che mostra l'età dell'automobile
    mostraEtà() {
        return `L'auto ${this.marca} ${this.modello} ha ${this.#calcolaEtà()} anni.`;
    }
}

// Creazione di un'istanza e test
const miaAuto = new Automobile("Fiat", "Punto", 2016);
console.log(miaAuto.mostraEtà()); // Output: L'auto Fiat Punto ha 9 anni.

// Verifica dell'inaccessibilità del metodo privato
//console.log(miaAuto.#calcolaEtà()); // ❌ Errore! Metodo privato non accessibile.
/*Il metodo privato #calcolaEtà() è accessibile solo all'interno della classe Automobile.
Questo approccio è utile per incapsulare la logica interna e mantenere la sicurezza dei dati!*/ 
