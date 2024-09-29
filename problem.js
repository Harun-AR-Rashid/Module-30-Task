// task-1
// const x = ['Liza', 'Halima', 'humayara', 'Noyan'];
// const newArray = x.filter(item => item.length % 2 == 0);
// console.log(newArray);
// problem-3
const numbers = [4, 5, 3, 7, 6, 9];
// separated
const squareElements = x => x.map(x => x * x);
// console.log(squareElements(numbers));
const squareArro = squareElements(numbers);


const reduceElements = squareArro.reduce((a, b) => a + b, 0);
// console.log(reduceElements);
// Alltogether
const sumOfSquare = numbers.map(x => x * x).reduce((a, b) => a + b, 0);
// console.log(sumOfSquare);
const avgOfSum = sumOfSquare / squareArro.length;
console.log(avgOfSum);
// Peoblem-4
const arrayOne = [3, 4, 5, 2, 7, 9];
const arrayTwo = [12, 43, 5, 23, 3, 23];
const arrayThird=[...arrayOne,...arrayTwo];
console.log(arrayThird);
const maxValue=Math.max(...arrayThird);
console.log(maxValue);