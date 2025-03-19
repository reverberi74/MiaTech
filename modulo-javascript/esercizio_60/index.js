// Conversione di una stringa JSON in un oggetto
const jsonString = '{"nome":"Luca","cognome":"Calvo","età":50,"email":"luca.calvo@gmail.com"}';

const utente = JSON.parse(jsonString);

console.log(utente);
/*output:
{
  nome: 'Luca',
  cognome: 'Calvo',
  'età': 50,
  email: 'luca.calvo@gmail.com'
}*/