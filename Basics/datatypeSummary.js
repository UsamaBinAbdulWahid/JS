//PRIMITIVE DATA TYPES / Call by Value

const num = 23; // 1. Number

const str = "Hello World"; // 2. String

const isLoggedIn = false; // 3. Boolean

let val; // 4. Undefined, when we don't give any value to a variable

const temp = null; // 5. Null

const id1 = Symbol("123"); // 6. Symbol (ES6), Object with unique identifier, Soo Output will be
const id2 = Symbol("123"); // different, like in this case Output: false, even though both are same
console.log(id1 == id2);

const bigNum = 4723462397341234908n; // 7. BigInt (ES11)

//NON PRIMITIVE DATA TYPES / Call by Reference

let myDetails = {
  name: "Usama", // 1. Object
  age: 20,
  isMale: true,
};

const myFunction = function (params) {
  console.log("Hello World"); // 2. Function
};

const heroes = ["Ironman", "Spiderman", "Superman"]; // 3. Array

// 4. Date
// 5. RegExp
// 6. Map

//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly.

