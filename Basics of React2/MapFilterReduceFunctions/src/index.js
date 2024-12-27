var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
const newNumber = numbers.map(double);
console.log(newNumber);

var newNumbers = [];
function double(x) {
  newNumbers.push(x ^ 2);
}
numbers.forEach(double);
console.log(newNumber);

const newNumbers = numbers.map(function (x) {
  return x ^ 2;
});
//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.