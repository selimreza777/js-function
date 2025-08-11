/**
 * for given string tell me weather it has even number of characters or not
 * 
 */
function evenSizeString(str) {
  const size = str.length;
  if (size % 2 === 0) {
    console.log('even size');
    return true;
  }
  else {
    console.log('odd')
    return false;
  }

  console.log(str, size);

}
// evenSizeString('Dhaka mirpurr');

// evem or odd
// function evenSizeString(str) {
//   return str.length % 2 === 0;


// }
// console.log(evenSizeString('dhaka'));
// console.log(evenSizeString('sylhet'));

function doubleOrTripple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  }
  else {
    const result = number * 3;
    return result;
  }
}
// console.log(doubleOrTripple(5, true));
// console.log(doubleOrTripple(5, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}
numberOfElements([12, 13, 34, 53, 56]);