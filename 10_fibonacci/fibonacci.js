const fibonacci = function (member) {
let stringToNumber = Number(member)
  if (stringToNumber < 0) {
    return `OOPS`;
  } else if (stringToNumber < 2) {
    return stringToNumber;
  } else {
    return (fibonacci(stringToNumber-1) + fibonacci(stringToNumber-2))
  }
  
};

// Do not edit below this line
module.exports = fibonacci;
