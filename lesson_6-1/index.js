const message = prompt('Enter yor string');
const chars = prompt('Enter some chars for removing');

function foo(string, arr) {
    if (string === null || string === '') {
        alert('smt went wrong');
        return;
    }

    for (let char of arr) {
        string = string.split(char).join(''); // .join('') - з'єднує частини назад 
    }
    return string;
}

const result = foo(message, chars);
if (result !== undefined) {
    alert(result);
}