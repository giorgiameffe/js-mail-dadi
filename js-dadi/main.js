
// generare un numero randomico per il computer

const computerNumbers = Math.floor((Math.random()* 6) + 1);
console.log(computerNumbers);

// generare un numero randomico per l'utente 

const userNumbers = Math.floor((Math.random()* 6) + 1);
console.log(userNumbers);

// se il numero generato è maggiore per il computer

if (computerNumbers > userNumbers) {
    console.log(`Il computer ha generato il numero ${computerNumbers}, hai perso!`);
    
// se il numero generato è maggiore per l'utente

} else if (userNumbers > computerNumbers) {
    console.log(`Hai generato il numero ${userNumbers}, hai vinto!`);

// se i numeri sono uguali
    
} else if (userNumbers === computerNumbers) {
    console.log(`Pareggio!`);
    
}