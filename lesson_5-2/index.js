let chooseCurrency = prompt("Which currency you want to convert to dollars? \n Variants: uah | euro | cad");

const usdToUah = 41.14;
const usdToEuro = 0.95;
const usdToCad = 1.40;

if (chooseCurrency === null) {
    console.log("You didn't choose any currency");
} else {
    chooseCurrency = chooseCurrency.toLowerCase();

    if (chooseCurrency === 'uah') {
        for (let usd = 10; usd <= 100; usd += 10) {
            const valueInUAH = usd * usdToUah;
            console.log(`${usd}$ = ${valueInUAH.toFixed(1)}₴`);
        }
    } else if (chooseCurrency.toLowerCase() === 'euro') {
        for (let usd = 10; usd <= 100; usd += 10) {
            const valueInEuro = usd * usdToEuro;
            console.log(`${usd}$ = ${valueInEuro.toFixed(1)}€`);
        }
    } else if (chooseCurrency.toLowerCase() === 'cad') {
        for (let usd = 10; usd <= 100; usd += 10) {
            const valueInCad = usd * usdToCad;
            console.log(`${usd}$ = ${valueInCad.toFixed(1)}C$`);
        }
    } 
}
