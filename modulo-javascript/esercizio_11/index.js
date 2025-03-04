// if, else if & else
let score = prompt("Inserisci un numero:");

// Converti l'input in un numero
score = Number(score);

if (score >=90 && score <=100) {
    alert("Voto Ottimo");
    console.log("Voto Ottimo");
} else if (score >=70 && score <=89){
        alert("Voto Buono");
        console.log("Voto Buono");
    } else if (score >=60 && score <=69){
        alert("Voto Sufficiente");
        console.log("Voto Sufficiente");
    }else{
        alert("Voto Insufficiente");
        console.log("Voto Insufficiente");
    }

    
