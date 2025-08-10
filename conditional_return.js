function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  else {
    return false;
  }

}
const output = isEven(31);
console.log(output);
console.log(isEven(10));
console.log(isEven(35));

// odd calculate 
function oddCalculate(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}
const oddNumber = oddCalculate(20);
console.log(oddCalculate);
console.log(oddCalculate(25));
console.log(oddCalculate(30));