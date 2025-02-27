
# Gioco dei dadi (bonus)

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Bonus:
Invece di generare il numero random per l'utente, chiedilo con un prompt!

## Soluzione

- generare un numero randomico per il computer
- creare un prompt dell'utente dove può scegliere un numero da 1 a 6
  - se il dato è valido 
    - proseguire con l'operazione
       - se il numero generato è maggiore per il computer
           - stampare il risultato "Il computer ha generato il numero x, hai perso!"
        - altrimenti se il numero generato è maggiore per l'utente
           - stampare il risultato "Hai generato il numero x, hai vinto!"
        - altrimenti se i numeri sono uguali 
           - stampare il risultato "Pareggio!"
  - altrimenti 
     - stampare 'Il dato non è valido' 


