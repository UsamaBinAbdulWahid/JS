let myArr = [1, 2, 3, 4, 5];
console.log(myArr[0]); // 1
let newArr = new Array(1, 2, 3, 4, 5);
console.log(newArr[0]); // 1


console.log(newArr.push(6)); // 6
console.log(newArr.pop()); // 5   pop method with remove the last element of the array
console.log(newArr.shift()); // 1   shift method will remove the first element of the array
console.log(newArr.unshift(1)); // 5  unshift method will add the element at the first position of the array


console.log(newArr.includes(3)); // true
console.log(newArr.indexOf(3)); // 2

console.log(newArr.join(' ')); // 1 2 3 4 5 //join method will join the array elements with the given separator and also convert it into string

console.log(newArr.slice(1, 3)); // [2, 3] // slice method will return the new array with the elements from the given start index to end index

console.log(newArr.splice(1, 2)); // [2, 3] // splice method will remove the elements from the given start index to end index and return the removed elements
console.log(newArr); // [1, 4, 5] // the original array will be modified after using the splice method

console.log(newArr.concat([2, 3])); // [1, 4, 5, 2, 3] // concat method will return the new array by combining the original array with the given array, soo we need to store the result in a new array
console.log(newArr); // [1, 4, 5] // the original array will not be modified after using the concat method


console.log(newArr.reverse()); // [5, 4, 1] // reverse method will reverse the array elements
console.log(newArr); // [5, 4, 1] // the original array will be modified after using the reverse method

const allArr = [...myArr, ...newArr]; // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5] // spread operator will combine the two arrays into a single array just like concat but in better way
console.log(allArr);

const mixArr = [1,3,5,7,[4,2],5,8,[4.2,[4,8]]]
const mixAltArr = mixArr.flat(Infinity)
console.log(mixAltArr) // [1, 3, 5, 7, 4, 2, 5, 8, 4.2, 4, 8] // flat method will remove the nested arrays and return the single array

let newStr = 'Hello World';
console.log(Array.isArray(newStr)); // false // isArray method will return true if the given value is an array otherwise false
console.log(Array.from(newStr)); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'] // from method will convert the string into an array of characters
console.log(Array.from({name: 'John', age: 25})); // [] // from method will not work with objects

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [100, 200, 300] // of method will convert the given values into an array and returns as a new array
console.log(Array.of(score1)); // [100] // of method will convert the single value into an array