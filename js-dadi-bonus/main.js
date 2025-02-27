
// prompt per l'utente 

const userNumbers = parseInt(prompt('Inserisci un numero da 1 a 6'));

// generare un numero randomico per il computer

const computerNumbers = Math.floor((Math.random()* 6) + 1);

const minNumber = 1;
const maxNumber = 6;

// condizione di validità 

const isNumberValid = userNumbers >= minNumber && userNumbers <= maxNumber;

if (isNumberValid) {

    console.log('User result', userNumbers);
    console.log('Computer result', computerNumbers);

} else {

    console.log('Numero non valido');
}
