const year = prompt("What's your year of birth?");
const city = prompt("In which city do you live?");
const sport = prompt("What's your favourite sport?");

const kyiv = "Ukraine";
const washington = "the USA";
const london = "the UK";

const football = "Andriy Shevchenko";
const basketball = "Michael Jordan";
const tennis = "Jimmy Connors";

if (city === "Kyiv" && sport === "football") {
    alert(year + ". " + "You live in the capital of " + kyiv + ". " + "Cool! Do you want to be " + football + "?");
} else if (city === "Kyiv" && sport === "basketball") {
    alert(year + ". " + "You live in the capital of " + kyiv + ". " + "Cool! Do you want to be " + basketball + "?");
} else if (city === "Kyiv" && sport === "tennis") {
    alert(year + ". " + "You live in the capital of " + kyiv + ". " + "Cool! Do you want to be " + tennis + "?");
}

if (city === "Washington" && sport === "football") {
    alert(year + ". " + "You live in the capital of " + washington + ". " + "Cool! Do you want to be " + football + "?");
} else if (city === "Washington" && sport === "basketball") {
    alert(year + ". " + "You live in the capital of " + washington + ". " + "Cool! Do you want to be " + basketball + "?");
} else if (city === "Washington" && sport === "tennis") {
    alert(year + ". " + "You live in the capital of " + washington + ". " + "Cool! Do you want to be " + tennis + "?");
}

if (city === "London" && sport === "football") {
    alert(year + ". " + "You live in the capital of " + london + ". " + "Cool! Do you want to be " + football + "?");
} else if (city === "London" && sport === "basketball") {
    alert(year + ". " + "You live in the capital of " + london + ". " + "Cool! Do you want to be " + basketball + "?");
} else if (city === "London" && sport === "tennis") {
    alert(year + ". " + "You live in the capital of " + london + ". " + "Cool! Do you want to be " + tennis + "?");
}

if (city !== "Kyiv" && city !== "Washington" && city !== "London" && sport === "football") {
    alert(year + ". " + "You live in the city " + city + ". " + "Cool! Do you want to be " + football + "?");
} else if (city !== "Kyiv" && city !== "Washington" && city !== "London" && sport === "basketball") {
    alert(year + ". " + "You live in the city " + city + ". " + "Cool! Do you want to be " + basketball + "?");
} else if (city !== "Kyiv" && city !== "Washington" && city !== "London" && sport === "tennis") {
    alert(year + ". " + "You live in the city " + city + ". " + "Cool! Do you want to be " + tennis + "?");
}
