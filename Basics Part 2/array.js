// ✅ Best practice: Use array literals [] instead of new Array()
let myArr = [1, 2, 3, 4, 5];  // Array with 5 elements
console.log(myArr[0]); // Output: 1 (Accessing the first element)

// ❌ Not recommended unless needed
let newArr = new Array(1, 2, 3, 4, 5); 
console.log(newArr[0]); // Output: 1 (same as above, but unnecessary use of new Array())

// ✅ Adding & Removing Elements

newArr.push(6); // Adds 6 to the end of the array
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]

newArr.pop(); // Removes the last element (6)
console.log(newArr); // Output: [1, 2, 3, 4, 5]

newArr.shift(); // Removes the first element (1)
console.log(newArr); // Output: [2, 3, 4, 5]

newArr.unshift(1); // Adds 1 back to the start
console.log(newArr); // Output: [1, 2, 3, 4, 5]

// ✅ Checking if an element exists in the array

console.log(newArr.includes(3)); // true (3 exists in the array)
console.log(newArr.indexOf(3)); // 2 (index of 3 in the array, counting starts from 0)

// ✅ Converting an array to a string
console.log(newArr.join(' ')); // "1 2 3 4 5" (joins elements with space separator)

// ✅ Extracting part of an array (without modifying original array)
console.log(newArr.slice(1, 3)); // [2, 3] (Returns elements from index 1 to 2, does not include index 3)

// ✅ Removing elements from an array (modifies original array)
console.log(newArr.splice(1, 2)); // [2, 3] (Removes elements at index 1 and 2)
console.log(newArr); // [1, 4, 5] (Original array is changed)

// ✅ Merging arrays (concat does not modify original array)
console.log(newArr.concat([2, 3])); // [1, 4, 5, 2, 3] 
console.log(newArr); // [1, 4, 5] (Original array remains unchanged)

// ✅ Using spread operator (Best way to merge arrays)
const allArr = [...myArr, ...newArr]; 
console.log(allArr); // [1, 2, 3, 4, 5, 1, 4, 5] (Combining myArr and newArr)

// ✅ Reversing an array (modifies original array)
console.log(newArr.reverse()); // [5, 4, 1] (Elements reversed)
console.log(newArr); // [5, 4, 1] (Original array changed)

// ✅ Flattening nested arrays (Removing sub-arrays)
const mixArr = [1, 3, 5, 7, [4, 2], 5, 8, [4.2, [4, 8]]];
const mixAltArr = mixArr.flat(Infinity); // Flattens all nested levels
console.log(mixAltArr); // [1, 3, 5, 7, 4, 2, 5, 8, 4.2, 4, 8]

// ✅ Checking if a value is an array
let newStr = "Hello World";
console.log(Array.isArray(newStr)); // false (because newStr is a string)
console.log(Array.from(newStr)); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'] (String converted to array)

// ⚠️ `Array.from()` does not work directly with objects
console.log(Array.from({ name: "John", age: 25 })); // [] (Empty array because objects are not iterable like strings)

// ✅ Creating an array from multiple values
let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300] (Creates a new array from individual values)
console.log(Array.of(score1)); // [100] (Creates an array with a single element)

/*
🎯 Key Improvements

✔ Used best practices: Avoid new Array(), use [] instead.
✔ Improved comments: Now they are more structured and explain the results better.
✔ Added missing explanations: Like why Array.from({}) returns [].
✔ Used consistent logging: Keeping the output format clear.

📌 Final Advice: Use slice() when you don't want to modify the original array. Use splice() when you need to remove elements permanently. Use flat() for nested arrays. 🚀
*/