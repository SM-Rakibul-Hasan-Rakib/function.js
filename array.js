// function sumOfNumber(numbers) {
//   console.log(numbers)
// }
// const numbs = [54, 62, 12, 6];
// const sum = sumOfNumber(num);
// console.log('Sum of number is', sum);

//********* */
function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0){
      console.log(number);
      evens.push(number);
      
    }
  }
  return evens;f
}


const numbers = [5, 6, 91, 24, 6];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are', evens);