let ask = prompt("Enter a number bigger than 100.");
let item = 0;

while (item < 10) {
    if (ask === null) { // перевірка на скасування
        alert("You canceled. Try again.");
        ask = prompt("Enter a number bigger than 100.");
        continue;
    } 
    if (ask === "") { // перевірка на пусту строку
        alert("You didn't enter any number. Try again.");
        ask = prompt("Enter a number bigger than 100.");
        continue;
    }

    ask = Number(ask);
    item++;

    if (isNaN(ask) || ask < 100) {
        alert("Error. Try again.");
        ask = prompt("Enter a number bigger than 100.");
    } else {
        alert(`You entered ${ask}.`);
        break;
    }

    if (item === 9) {
        alert('You reached the data entry limit. The program is stopped.');
        break;
    }
}