function counter(initialValue) {
    let count = initialValue;

    return function(value) {
    count += value;
    return count;
    };
}

const sum = counter(0);

console.log(sum(4));
console.log(sum(4));
console.log(sum(4));