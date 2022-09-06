const sumAll = function (numStart, numEnd) {
  let sum = 0; 

  if ( (numStart < 0 || numEnd < 0) || (!Number.isInteger(numStart) || !Number.isInteger(numEnd)) ) {
    return "ERROR";
  } else if (numStart > numEnd) {
    for (let index = numEnd; index <= numStart; index++) {
      sum += index;
    }
    return sum;
  } else {
    for (let index = numStart; index <= numEnd; index++) {
      sum += index;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;

