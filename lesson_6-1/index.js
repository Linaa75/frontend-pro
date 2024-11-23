const message = prompt('Enter yor string');
const chars = prompt('Enter some chars for removing');

function foo(string, arr) {
    for (let char of arr) {
        string = string.split(char).join(''); // .join('') - з'єднує частини назад 
    }
    return string;
}

const result = foo(message, chars);

alert(result);
