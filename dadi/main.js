/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */

let userRoll = prompt("Roll the dice! Type 'Roll' to try yout luck!", "Roll")

let userDice;

if (userRoll === "Roll") {
    userDice = Math.floor(Math.random() * 6 + 1)
} else {
    alert("Come on, at least try!")
}

let botDice = Math.floor(Math.random() * 6 + 1);

console.log("Your roll: " + userDice);
console.log("Our roll: " + botDice);

if (userDice == undefined) {
    alert("You gotta type 'Roll'");
} else if (userDice > botDice) {
    alert("YOU WON! Nothing... but you still won!!")
} else if (userDice < botDice) {
    alert("YOU LOSE! WOMP WOMP")
} else if (userDice = botDice) {
    alert("IT'S A TIE!")
}