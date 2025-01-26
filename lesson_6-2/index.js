const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function foo(array) {
    let sum = 0;
    let qty = 0;

    for (let item of array) {
        if (typeof item === 'number' && item !== null) {
            sum += item;
            qty++;
        }
    }

    if (qty === 0) return 0;

    return sum / qty;
}

const result = foo(array);

console.log(result);