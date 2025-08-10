// function add(price1, price2) {
//   const total = price1 + price2;
//   return total;
// }
// const bill = add(25, 60);
// console.log("brif-kacci:", bill);

// function add2(price1, price2) {
//   return price1 + price2;
// }
// const bill2 = add2(22, 33);
// console.log("biriyani:", bill2);
// const totalBill = bill + bill2;
// console.log("TotalPrice:", totalBill);
// let totalAmount = totalBill;
// let totalDiscount = 5;
// let discountAmount = (totalAmount * totalDiscount) / 100;
// let finalPrice = totalAmount - discountAmount;
// console.log("discount 5%:", discountAmount);
// console.log("finalamount:", finalPrice);

function doMath(num1, num2) {
  const sum = num1 + num2;
  const dif = num1 - num2;
  const multiply = sum * num2;
  const result = multiply / 2;
  return result; 
}
const result = doMath(10, 5);
console.log(result);