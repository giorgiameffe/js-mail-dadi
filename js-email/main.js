
const emailList = ['giorgia@gmail.com', 'margot@gmail.com','sabrina@gmail.com','tony@gmail.com'];

console.log(emailList);

const myEmail = prompt('Inserisci la tua email');

for (let i = 0; i < emailList.length; i++) {
    let currentEmail = emailList[i];
    console.log(currentEmail);    
}