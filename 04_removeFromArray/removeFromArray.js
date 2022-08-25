const removeFromArray = function(numbers, num) {

    let newNumbers = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] !== num) {
            newNumbers.push(numbers[i])
        }        

    }
    return newNumbers;    

};

// Do not edit below this line
module.exports = removeFromArray;
