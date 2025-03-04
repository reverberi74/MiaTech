// Verifica il punteggio con lo switch
let score = parseInt(prompt("Inserisci il tuo punteggio:")); // Chiede il punteggio e lo converte in numero

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("Voto ottimo");
        alert("Voto Ottimo");
        break;
    case (score >= 70 && score <= 89):
        console.log("Voto buono");
       alert("Voto buono");
        break;
    case (score >= 60 && score <= 69):
        console.log("Voto sufficiente");
        alert("Voto sufficiente");
        break;
    default:
        console.log("Voto insufficiente");
        alert("Voto insufficiente");
}