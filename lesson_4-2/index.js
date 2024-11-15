let num = prompt("Enter 3 numbers");

if (num[0] === num[1] && num[1] === num[2]) {
    alert("All numbers the same");
} else if (num[0] === num[1] || num[0] === num[2] || num[0] === num[2]) {
    alert("Not all numbers the same");
} else {
    alert("There are no identical numbers");
}

