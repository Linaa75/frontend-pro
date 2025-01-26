let chooseCurrency = prompt("Which currency you want to convert to dollars? \n Variants: uah | euro | cad");

const usdToUah = 41.14;
const usdToEuro = 0.95;
const usdToCad = 1.40;

switch (chooseCurrency.toLowerCase()) {
    case 'uah': {
        for (let usd = 10; usd <= 100; usd += 10) {
            const valueInUAH = usd * usdToUah;
            console.log(`${usd}$ = ${valueInUAH.toFixed(1)}₴`);
        }
        break;
    } 
    case 'euro': {
        for (let usd = 10; usd <= 100; usd += 10) {
            const valueInEuro = usd * usdToEuro;
            console.log(`${usd}$ = ${valueInEuro.toFixed(1)}€`);
        }
        break;
    }
    case 'cad': {
        for (let usd = 10; usd <= 100; usd += 10) {
            const valueInCad = usd * usdToCad;
            console.log(`${usd}$ = ${valueInCad.toFixed(1)}C$`);
        }
        break;
    }
    default: {
        console.log("You didn't choose any currency");
        break;
    }
}

