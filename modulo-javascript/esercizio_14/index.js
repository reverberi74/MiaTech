// Somma di un Array di numeri
let numbers = [11, 22, 33, 44, 55, 66];  
let sumNumbers = 0;
const firstNumbers = numbers[0];

    for(let i=0; i<numbers.length; i++){
        sumNumbers += numbers[i]; 
    }

console.log("The Sum of the Elements of the Array is: "+sumNumbers);