let cycle = true;

while (cycle) {
    let num = parseInt(prompt("Enter a number"));

    if (num <= 1) {
        alert("This is not a prime number");
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            alert("This is a prime number");
        } else {
            alert("This is not a prime number");
        }
    } 

    let userResponse = prompt("Do you want to check another number? (yes/no)");
    
    if (userResponse === null || userResponse.toLowerCase() !== "yes") {
        cycle = false;
        console.log("Program finished");
    }
}
