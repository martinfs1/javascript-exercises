const removeFromArray = function(numbers, ...num1) {    

    for (let i = 0; i < numbers.length; i++) {
        num1.forEach((n) => {
            if (numbers.includes(n) && n === numbers[i]) {
                numbers.splice(numbers.indexOf(n),num1.length);
            }
        })
        
    }   

    return numbers;
    
};

// Do not edit below this line
module.exports = removeFromArray;
