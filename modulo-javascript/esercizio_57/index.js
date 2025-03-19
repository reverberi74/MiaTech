// Destructuring array con rest operator
const numeri = [5, 15, 25, 35, 45];

const [primo, secondo, ...resto] = numeri;

console.log("Primo numero:", primo);   // 5
console.log("Secondo numero:", secondo); // 15
console.log("Resto dell'array:", resto); // [25, 35, 45]
