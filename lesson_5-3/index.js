const N = parseInt(prompt("Enter a number"));

if (!isNaN(N) && N >= 0) {
    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        } else {
            console.log("the value is bigger than the entered number");
        }
    }
}