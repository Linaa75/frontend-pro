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
                const result = count(item);
                if (result === false) {
                    return false;
                }
            }
        }
        return true;
    }
        
    const checkResult = count(company);
    if (checkResult === false) {
        console.log('you have mistake: one or more salaries are not numbers');
        return false;
    } 

    return totalSalary;
}

const total = totalSales(company);
console.log(`The total salary is ${total}`);