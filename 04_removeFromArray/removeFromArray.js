const removeFromArray = function(numbers, ...num1) {    

    for (let i = 0; i < numbers.length; i++) {
        num1.forEach((n) => {
            const lengthNum1 = [];
            if (numbers.includes(n)) {
                lengthNum1.push(n);
                numbers.splice(numbers.indexOf(n), lengthNum1.length);
            }
        })
        
    }   

    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
