const palindromes = function (str) {
  
  let testedStr = str.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "").toLowerCase();  

  let reverseStr = "";
  for (let i = testedStr.length - 1; i >= 0; i--) {
    reverseStr += testedStr[i];
  }
  return testedStr === reverseStr;
};
// Do not edit below this line
module.exports = palindromes;
