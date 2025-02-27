
// creare una lista di email di invitati ad una festa.

const emailList = ['giorgia@gmail.com', 'margot@gmail.com','sabrina@gmail.com','tony@gmail.com'];

console.log(emailList);

// chiedere all'utente la sua email 

const myEmail = prompt('Inserisci la tua email');

let validEmail;

// inizio ciclo for

for (let i = 0; i < emailList.length; i++) {

    // Controllare se l'email sia presente nella lista 

    let currentEmail = emailList[i];

    // email valida

    if (myEmail === currentEmail) {
        console.log('Sei invitato, entra!');
        validEmail = true;
        break;
    } 

}

// email non valida

if (!validEmail) {
    console.log('Non invitato');
}

