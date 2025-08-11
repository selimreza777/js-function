/*
* create a function that will return only the even number
* return the some of even number
*/
function evenNumbersOnly(numbers) {
  // console.log(numbers);
  const evens = [ ];
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
   

  }
   return evens;

}
const numbers = [5, 3, 5, 6, 8, 91, 144];
const evens =evenNumbersOnly(numbers);
console.log('even number:',evens);

function sumOfEvenNumbers(){
  let sum=0;
  for(const number of numbers){
    if(number % 2===0){
      console.log(number);
      sum= sum+number;
      
    }
  }
  return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log('sum of even number is:',sum);