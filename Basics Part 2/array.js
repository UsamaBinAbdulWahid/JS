let myArr = [1, 2, 3, 4, 5];
console.log(myArr[0]); // 1
let newArr = new Array(1, 2, 3, 4, 5);
console.log(newArr[0]); // 1


console.log(newArr.push(6)); // 6
console.log(firstArr.pop()); // 5   pop method with remove the last element of the array
console.log(newArr.shift()); // 1   shift method will remove the first element of the array
console.log(newArr.unshift(1)); // 5  unshift method will add the element at the first position of the array


console.log(newArr.includes(3)); // true
console.log(newArr.indexOf(3)); // 2

console.log(newArr.join(' ')); // 1 2 3 4 5 //join method will join the array elements with the given separator and also convert it into string

console.log(firstArr.slice(1, 3)); // [2, 3] // slice method will return the new array with the elements from the given start index to end index

console.log(firstArr.splice(1, 2)); // [2, 3] // splice method will remove the elements from the given start index to end index and return the removed elements
console.log(firstArr); // [1, 4, 5] // the original array will be modified after using the splice method

console.log(firstArr.concat([2, 3])); // [1, 4, 5, 2, 3] // concat method will return the new array by combining the original array with the given array

console.log(firstArr.reverse()); // [5, 4, 1] // reverse method will reverse the array elements
console.log(firstArr); // [5, 4, 1] // the original array will be modified after using the reverse method