const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  // return array.reduce((total, current) => total + current, 0);
  let numA = 0;
  arr.forEach((item) => (numA += item));
  return numA;
};

const multiply = function (arr) {
  let result = arr.reduce((total, currentValue) => total * currentValue);

  return result;
};

const power = function (num1, num2) {
  let result = Math.pow(num1, num2);
  return result;
};

const factorial = function (num) {
  let result = num;
  if (num === 0 || num === 1) {
    return result = 1;
  } else {
    for (let i = num; i > 1; i--) {
      result *= (i - 1); 
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
