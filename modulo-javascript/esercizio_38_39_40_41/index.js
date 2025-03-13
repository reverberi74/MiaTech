// Contatore, Incrementa Contatore, Aggiungi Km, Mostra contatore
class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = 0;
        this.#contatoreChiamate = 0; // Proprietà privata per contare le chiamate
    }

    // Proprietà privata per contare le chiamate al metodo aggiungiChilometri
    #contatoreChiamate;

    // Metodo privato per incrementare il contatore
    #incrementaContatore() {
        this.#contatoreChiamate++;
    }

    // Metodo pubblico per aggiungere chilometri e incrementare il contatore
    aggiungiChilometri(km) {
        if (km > 0) {
            this.chilometraggio += km;
            this.#incrementaContatore(); // Incrementa il contatore ogni volta che viene chiamato
        } else {
            console.log("Inserisci un valore positivo per i chilometri.");
        }
    }

    // Metodo pubblico per mostrare il numero di chiamate effettuate a aggiungiChilometri
    mostraContatoreChiamate() {
        return `Il metodo aggiungiChilometri è stato chiamato ${this.#contatoreChiamate} volte.`;
    }
}

// Creazione di un'istanza della classe Automobile
const miaAuto = new Automobile("Fiat", "Panda", 2015);

// Aggiunta di chilometri
miaAuto.aggiungiChilometri(50);
miaAuto.aggiungiChilometri(30);
miaAuto.aggiungiChilometri(20);

// Mostra il numero di chiamate al metodo aggiungiChilometri
console.log(miaAuto.mostraContatoreChiamate()); // Output: Il metodo aggiungiChilometri è stato chiamato 3 volte.
