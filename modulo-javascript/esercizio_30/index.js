// reduce & sort
// Creazione dell'array expenses con varie spese
const expenses = [100, 200, 50, 75, 300];

// Calcolare la somma totale delle spese con reduce
const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
console.log("Total amount of expenses:", totalExpenses);

// Creazione dell'array words
const words = ["banana", "apple", "cherry", "date"];

// Ordinare l'array words in ordine alfabetico
words.sort();
console.log("Sorted Array:", words);