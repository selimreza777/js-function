/**
 * objective: write a function to give me the sum of all numbers in an array 
 * step 1: function declear
 * step 2: call check whether the function is called properly
 * step 3: set a prameter
 * step 4: pas the parmeter(s), check whether parameter is passed in a proper format
 * step 5: do the function tasks (step by step)
 * 
 */
function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  }
  return sum;
}
const nums = [54, 23, 45, 56];
const sum = sumOfNumbers(nums);
console.log('Sum of Number is:', sum);
