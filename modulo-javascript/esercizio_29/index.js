// filter & find
// Creazione dell'array student con oggetti
const students = [
    { name: "Steve", grade: 85 },
    { name: "John", grade: 55 },
    { name: "Michael", grade: 72 },
    { name: "Demi", grade: 40 },
    { name: "Eve", grade: 90 }
];

// Uso filter per ottenere gli studenti con grade >= 60
console.log("The promoted students are:");
const passedStudents = students.filter(student => student.grade >= 60);
passedStudents.forEach(student => console.log(student)); // Stampa il nuovo array degli studenti promossi

// Uso find per trovare il primo studente con grade < 60
console.log("The students who fail are:");
const firstFailedStudent = students.find(student => student.grade < 60);
console.log(firstFailedStudent); // Stampa lo studente bocciato
 