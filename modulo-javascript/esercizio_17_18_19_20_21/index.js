// Crea un oggetto
let person = {
    name: "Edwige Fenech",
    age: 76,
    city: "Nizza"
};

console.log(person); // Stampa l'oggetto in console
// Stampa solamente la proprietà age
console.log(person.age);
person.age = 77; // modifica età
console.log("L'età modificata è adesso: "+person.age); //stampa età modificata
person.job = "Attrice"; // aggiunta proprietà job
console.log(person.job); // stampa l'oggetto con la nuova proprietà
console.log("L'oggetto person è così composto:");
for (let key in person) {
    console.log(key + ": " + person[key]); // Stampa il nome della proprietà e il valore
}