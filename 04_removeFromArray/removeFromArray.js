const removeFromArray = function (numbers, ...num1) {

  num1.forEach((n) => {
    if (numbers.includes(n)) {
      numbers.splice(numbers.indexOf(n), 1);
    }
  });

  return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
