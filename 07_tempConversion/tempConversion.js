const ftoc = function(fValue) {
  let celsius = 0;
  if (!isNaN(fValue)) {
    celsius = Number.parseFloat((fValue-32) * 5/9).toFixed(1);
    return Number(celsius)
  }

};

const ctof = function(cValue) {
  let fahrenheit= 0;
  if (!isNaN(cValue)) {
    fahrenheit = Number.parseFloat(cValue*9/5+32).toFixed(1);
    return Number(fahrenheit)
  }

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
