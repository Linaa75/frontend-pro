function totalSales(company) {
    let totalSalary = 0;

    function count(data) {
        for (const item of Object.values(data)) {
            if (Array.isArray(item)) {
                for (const person of item) {
                    if (typeof person.salary !== 'number') {
                        return false;
                    }
                    totalSalary += person.salary;
                }

            } else if (typeof item === 'object') {
                if (!count(item)) {
                    return false;
                }
            }
        }
        return true;
    }
    const checkResult = count(company);
    if (!checkResult) {
        console.log('you have mistake: one or more salaries are not numbers');
        return false;
    } 
    return totalSalary;
}

const total = totalSales(company);
console.log(`The total salary is ${total}`);


// another solution variant

// function sumSalary(data) {
//     if (Array.isArray(data)) {
//         return data.reduce((total, item) => total + sumSalary(item), 0); 
//     } else if (typeof data === 'object' && data !== null) {
//         let sum = 0;
//         for (let key in data) {
//             sum += sumSalary(data[key]);
//         }
//         return sum;
//     } else if (typeof data === 'number') {
//         return data;
//     } else {
//         return 0;
//     }    
// }

// const total = sumSalary(company);
// console.log(`The total salary is ${total}`);