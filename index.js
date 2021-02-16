// Code your solutions in this file

function writeCards(names, event) {
    let arrayOfThanks = [];
    for (let i = 0; i < names.length; i++) {
        arrayOfThanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return arrayOfThanks;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");



function countDown() {
    let counter = 10;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}

countDown();