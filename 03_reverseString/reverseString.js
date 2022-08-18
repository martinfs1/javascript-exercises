const reverseString = function(string) {
    
    let arrayString = string.split('');
    let reversedArray = arrayString.reverse()    
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
