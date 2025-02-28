
// prompt per l'utente 

const userNumbers = parseInt(prompt('Inserisci un numero da 1 a 6'));

// generare un numero randomico per il computer

const computerNumbers = Math.floor((Math.random()* 6) + 1);

const minNumber = 1;
const maxNumber = 6;

// condizione di validità 

const isNumberValid = userNumbers >= minNumber && userNumbers <= maxNumber;
const isNotText = userNumbers !== NaN;
const isDataValid = isNumberValid && isNotText;

if (isDataValid) {

    console.log('User result', userNumbers);
    console.log('Computer result', computerNumbers);

    // se il numero generato dal computer è maggiore 

    if (computerNumbers > userNumbers) {
        
        console.log('You lose!')

    // se il numero scelto è maggiore 

    } else if (userNumbers > computerNumbers) {

        console.log(`You win!`);

    // se i numeri sono uguali
    
    } else if (userNumbers === computerNumbers) {
        
        console.log(`Draw!`);
    }

// se il dato non è valido

} else {

    console.log('This data is not valid');
}
