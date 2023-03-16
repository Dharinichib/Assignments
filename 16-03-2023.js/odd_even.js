const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = arr.filter((number => {
    return number % 2 !== 0;}));
const evens = arr.filter(number => {
    return number % 2 === 0;
  });

console.log("EVEN NUMBER ARE: "+evens);
console.log("ODD NUMBERS ARE: "+odds)
