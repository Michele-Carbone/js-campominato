/*Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere
un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e
poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
*/


/* Preparazione del gioco
1 - creo una Array per contenere tutte le bombe;
2 - genero un numero rando e lo inserisco nell'Array di bombe finchè non arrivo a 16 elementi;
3 - creo una Array per ricordare i numeri scelti dall'utente;
*/

/* Inizio del Gioco
1 - Chiedo il primo numero all'utente;
2 - Controllo se il numero è presente nell'Array di bombe =>(se il numero è nella Array di bombe il gioco termina);
3 - Controllo se per caso lo aveva già scelto (se è presente nell'Array dei numeri già scelti) => (se è stato già scelto continuo a chiedere);
4 - Se il numero non era già scelto e non è nelle bombe lo aggiungiamo all'Array dei numeri scelti;
*/

/*Fine della partinta
1 - Stampo il messaggio di partita terminata;
2 - Stampo il punteggio del giocatore;
*/


var bombsNumbers = [1, 2];
var totalsNumbers = 5;
var totalsBombs = 2;
var possibilities = totalsNumbers - totalsBombs;


while (bombsNumbers.length < totalsBombs) {
    //generiamo un numero casuale da 1 a 100;
    var randomNumber = getRandomNumber(1, totalsNumbers);
    console.log('numero casuale: ', randomNumber);

    //verificare se il numero generato è già presente nell Array BombsNumbers
    if (!isInArray(randomNumber, bombsNumbers)) {
        bombsNumbers.push(randomNumber);
    }
}


var userNumbers = [];
while (userNumbers.length < possibilities) {
    //CHIEDO UN NUMERO ALL'UTENTE
    var userChoice = getUserNumber(1, totalsNumbers);

    //verifichiamo che il numero non sia nell' Array tra quelli già scelti dall'utente
    if (isInArray(userChoice, userNumbers)) {
        //se è presente
        alert('Il numero è stato già scelto');
    } else {
        //se non è presente
        if (isInArray(userChoice, bombsNumbers)) {
            alert('Game over');
        } else {
            userNumbers.push(userChoice);
        }
    }
    console.log(userNumbers);
}







/******** FUNCTION RANDOM NUMBER */
/**
 * / funzione che genera il numero rando tra il minimo e massimo
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
// funzione che genera il numero rando

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



/******** FUNCTION INCLUDES */
/**
 * controlla che un dato elemento sia presente in un dato elemento
 * @param {*} needle è l oggetto che stiamo cercando nell Array
 * @param {*} arr 
 * @returns {boolean} ci restituisce un vero o falso
 */

function isInArray(needle, arr) {
    var found = false;
    var i = 0;
    while (!found && i < arr.length) {
        if (needle === arr[i]) {
            found = true;
        }
        i++
    }
    return found;
}



/** FUNCTION FOR USERNUMBER */
function getUserNumber(min, max) {
    //CHIEDO UN NUMERO ALL'UTENTE
    var number;

    do {
        number = prompt('Inserisci un numero da ' + min + ' a ' + max);
    }

    //verifichiamo che l utente non abbia scritto qualcosa di diverso da quello chiesto
    while (!number || isNaN(number) || number.trim() === '' || number < min || number > max);

    return parseInt(number);
}







