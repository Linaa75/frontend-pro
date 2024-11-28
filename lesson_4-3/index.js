const year = prompt("What's your year of birth?");
const city = prompt("In which city do you live?");
const sport = prompt("What's your favourite sport?");

let country;
let player;

if (city.toLowerCase() === "Kyiv") {
    country = "Ukraine";
    if (sport === "football") {
        player = "Andriy Shevchenko";
    } else if (sport === "basketball") {
        player = "Michael Jordan";
    } else if (sport === "tennis") {
        player = "Jimmy Connors";
    }
} else if (city.toLowerCase() === "Washington") {
    country = "the USA";
    if (sport === "football") {
        player = "Andriy Shevchenko";
    } else if (sport === "basketball") {
        player = "Michael Jordan";
    } else if (sport === "tennis") {
        player = "Jimmy Connors";
    }
} else if (city.toLowerCase() === "London") {
    country = "the UK";
    if (sport === "football") {
        player = "Andriy Shevchenko";
    } else if (sport === "basketball") {
        player = "Michael Jordan";
    } else if (sport === "tennis") {
        player = "Jimmy Connors";
    }
}

if (country && player) {
    alert(`${year}. You live in the capital of ${country}. Cool! Do you want to be ${player}?`);
} else if (country) {
    alert(`${year}. You live in the capital of ${country}. Cool! But I don't know any famous athletes in ${sport} there.`);
} else if (sport) {
    alert(`${year}. You live in the city ${city}. Cool! Do you want to be ${sport} champion?`);
} else {
    alert('Some information is missing or incorrect.');
}

// const kyiv = "Ukraine";
// const washington = "the USA";
// const london = "the UK";

// const football = "Andriy Shevchenko";
// const basketball = "Michael Jordan";
// const tennis = "Jimmy Connors";

// if (city.toLowerCase() === "Kyiv" && sport.toLowerCase() === "football") {
//     alert(year + ". " + "You live in the capital of " + kyiv + ". " + "Cool! Do you want to be " + football + "?");
// } else if (city === "Kyiv" && sport === "basketball") {
//     alert(year + ". " + "You live in the capital of " + kyiv + ". " + "Cool! Do you want to be " + basketball + "?");
// } else if (city === "Kyiv" && sport === "tennis") {
//     alert(year + ". " + "You live in the capital of " + kyiv + ". " + "Cool! Do you want to be " + tennis + "?");
// }

// if (city === "Washington" && sport === "football") {
//     alert(year + ". " + "You live in the capital of " + washington + ". " + "Cool! Do you want to be " + football + "?");
// } else if (city === "Washington" && sport === "basketball") {
//     alert(year + ". " + "You live in the capital of " + washington + ". " + "Cool! Do you want to be " + basketball + "?");
// } else if (city === "Washington" && sport === "tennis") {
//     alert(year + ". " + "You live in the capital of " + washington + ". " + "Cool! Do you want to be " + tennis + "?");
// }

// if (city === "London" && sport === "football") {
//     alert(year + ". " + "You live in the capital of " + london + ". " + "Cool! Do you want to be " + football + "?");
// } else if (city === "London" && sport === "basketball") {
//     alert(year + ". " + "You live in the capital of " + london + ". " + "Cool! Do you want to be " + basketball + "?");
// } else if (city === "London" && sport === "tennis") {
//     alert(year + ". " + "You live in the capital of " + london + ". " + "Cool! Do you want to be " + tennis + "?");
// }

// if (city !== "Kyiv" && city !== "Washington" && city !== "London" && sport === "football") {
//     alert(year + ". " + "You live in the city " + city + ". " + "Cool! Do you want to be " + football + "?");
// } else if (city !== "Kyiv" && city !== "Washington" && city !== "London" && sport === "basketball") {
//     alert(year + ". " + "You live in the city " + city + ". " + "Cool! Do you want to be " + basketball + "?");
// } else if (city !== "Kyiv" && city !== "Washington" && city !== "London" && sport === "tennis") {
//     alert(year + ". " + "You live in the city " + city + ". " + "Cool! Do you want to be " + tennis + "?");
// }
