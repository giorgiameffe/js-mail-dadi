
// prompt per l'utente 

const userNumbers = parseInt(prompt('Inserisci un numero da 1 a 6'));

// generare un numero randomico per il computer

const computerNumbers = Math.floor((Math.random()* 6) + 1);

const minNumber = 1;
const maxNumber = 6;

// condizione di validità 

const isDataValid = userNumbers >= minNumber && userNumbers <= maxNumber;

if (isDataValid) {

    console.log('User result', userNumbers);
    console.log('Computer result', computerNumbers);

    if (computerNumbers > userNumbers) {
        
        console.log('Hai perso!')
    
    } else if (userNumbers > computerNumbers) {

        console.log(`Hai vinto!`);
    
    } else if (userNumbers === computerNumbers) {
        
        console.log(`Pareggio!`);
    }

} else {

    console.log('Il dato inserito non è valido');
}
