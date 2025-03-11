// ✅ STRING BASICS & TEMPLATE LITERALS

const myName = "Usama"; // Declaring a string variable
const myEmail = "usamaabdulwahid14@gmail.com"; // Declaring another string
const myAge = 20; // Number variable

// Using template literals (backticks ``) for better readability
console.log(
  `My name is ${myName}, my email is ${myEmail} and my age is ${myAge}`
);
// Output: My name is Usama, my email is usamaabdulwahid14@gmail.com and my age is 20


// ✅ STRING OBJECT VS PRIMITIVE STRING

const str = new String("Hello World"); 
// Creates a String object (not recommended, best to use primitive strings)

// ✅ STRING METHODS & PROPERTIES

const test = "Hello World";

// 1️⃣ STRING LENGTH
console.log(test.length); 
// Output: 11 (Counts the total number of characters including spaces)

// 2️⃣ CASE CONVERSIONS
console.log(test.toLowerCase()); 
// Output: "hello world" (Converts string to lowercase)

console.log(test.toUpperCase()); 
// Output: "HELLO WORLD" (Converts string to uppercase)

// 3️⃣ CHARACTER ACCESS
console.log(test.charAt(0)); 
// Output: "H" (Returns the character at index 0)

console.log(test[8]); 
// Output: "r" (Another way to access characters using bracket notation)

// 4️⃣ FINDING INDEX POSITIONS
console.log(test.indexOf("World")); 
// Output: 6 (Returns the index where "World" starts in the string)

console.log(test.lastIndexOf("World")); 
// Output: 6 (Same result because "World" appears once)

// 5️⃣ CHECKING STRING CONTENT
console.log(test.endsWith("World")); 
// Output: true (Checks if string ends with "World")

console.log(test.includes("World")); 
// Output: true (Checks if "World" exists in the string)

// 6️⃣ EXTRACTING PART OF A STRING
console.log(test.substring(0, 5)); 
// Output: "Hello" (Extracts characters from index 0 to 4)

console.log(test.slice(0, 5)); 
// Output: "Hello" (Works like substring but also supports negative indexes)

console.log(test.slice(-5)); 
// Output: "World" (Negative index means start from end)

// ✅ REMOVING WHITESPACES

const test2 = "   Usama      ";

console.log(test2.trim()); 
// Output: "Usama" (Removes spaces from both start and end)

console.log(test2.trimLeft()); 
// Output: "Usama      " (Removes spaces from start only)

console.log(test2.trimRight()); 
// Output: "   Usama" (Removes spaces from end only)

// `trim()` only removes whitespace characters, not other unwanted characters.


// ✅ SPLITTING A STRING INTO AN ARRAY
console.log(test.split(" ")); 
// Output: ["Hello", "World"] (Splits string at spaces and returns an array)


/*
🎯 Key Takeaways

✔ Always prefer primitive strings (const str = "Hello") over new String() objects.
✔ length gives the total number of characters in a string, including spaces.
✔ toUpperCase() & toLowerCase() change the case of a string.
✔ charAt(index) & string[index] allow you to access a specific character.
✔ indexOf() and lastIndexOf() help find the position of a substring in a string.
✔ endsWith() & includes() check if a string contains a specific substring.
✔ substring() & slice() extract parts of a string (use slice() for negative indexes).
✔ trim(), trimLeft(), and trimRight() remove spaces from a string.
✔ split(separator) converts a string into an array based on a separator.
*/