/* Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.
:puntare_a_destra: Bonus:
Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo includes
Nota: Non è necessario provvedere alla validazione delle email */

const verifiedMails = ["mahatma.ghandi@gmail.com", "leonardo.davinci@hotmail.it", "albert.einstein@genius.com", "galileo@galilei.it", "isaac.newton@sir.us"]

let userInput = prompt("Digit your mail here", "example@google.com")

let access;

console.log(verifiedMails);
console.log(userInput);
console.log();

for (let i = 0; i < verifiedMails.length; i++) {
    const verifiedPpl = verifiedMails[i];
    console.log(verifiedPpl);

    if (verifiedPpl === userInput) {
        access = true;
    } else {
        access = false;
    }
}
console.log();
console.log(access);

if (access === true) {
    alert("SUCCESS!! You've been granted access")
    console.log("Welcome " + userInput);
} else if (access === false) {
    alert("DENIED ACCESS Your email is not in our Guest List")
    console.log("Sorry " + userInput + " your email is not in our Guest List");
} else {
    alert("There's been an error, please try again")
}
