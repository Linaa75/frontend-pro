function answer() {
    let count = 0;
    let ask = prompt("Enter a number bigger than 100.");

    while (count < 10) {
        if (ask === null) { // перевірка на скасування
            alert("You canceled. Try again.");
            ask = prompt("Enter a number bigger than 100.");
            count++;
            continue;
        }
        if (ask === "") { // перевірка на пусту строку
            alert("You didn't enter any number. Try again.");
            ask = prompt("Enter a number bigger than 100.");
            count++;
            continue;
        }

        let num = Number(ask);

        if (isNaN(num)) {
            console.log(`You entered ${ask}.`);
            break;
        }
        if (num <= 100) { 
            alert("Error. Try again.");
            ask = prompt("Enter a number bigger than 100.");
            count++;
        } else { 
            console.log(`You entered ${ask}.`);
            break;
        }
    }

    if (count >= 10) {
        alert('You reached the data entry limit. The program is stopped.');
    } 
}

answer();