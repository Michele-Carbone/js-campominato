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













