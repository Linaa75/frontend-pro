const N = parseInt(prompt("Enter a number"));

if (!isNaN(N) && N >= 0) {
    for (let i = 1; i <= 100 && N >= i ** 2; i++) {
        console.log(i);
    } 
} else {
    console.log("the value is bigger than the entered number");
}
