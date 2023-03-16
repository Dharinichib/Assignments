let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.map(myFunction);

function myFunction(item) {
  sum = sum + item;
}
console.log(sum);