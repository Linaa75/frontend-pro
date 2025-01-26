const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEvenNumbers(arr) {
    if (Array.isArray(arr)) {
        return arr.filter(element => element % 2 === 0);
    } else {
        console.log('error');
        return null;
    }
}

const even = getEvenNumbers(arr);
console.log(even); // [2, 4, 6, 8]

