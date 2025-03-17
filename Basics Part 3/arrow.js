const user = {
  name: "Usama", // String property
  age: "22", // String property

  // ✅ Method inside the object
  welcomeMessage: function message() {
    console.log(`${this.name} is the name of the user.`); // 'this' refers to the current object
    console.log(this); // Logs the entire 'user' object
  },
};

// ✅ Testing 'this' in different contexts

console.log(this); 
// 🔹 In Node.js, it will return an empty object: {}
// 🔹 In the browser, it will return the 'window' object

user.welcomeMessage(); // Calls the method → Output: "Usama is the name of the user."

user.name = "Sami"; // Changing property value
user.welcomeMessage(); // Now it prints: "Sami is the name of the user."


// ✅ Using `this` inside a regular function
function newWorld() {
  console.log(this);
  // 🔹 In Node.js, it refers to the global object (e.g., 'global' in Node.js)
  // 🔹 In Browser, it refers to the `window` object
}

newWorld(); // Call the function


// ❌ Issue: 'this' inside a regular function does not refer to the object
function myName(){
  let name = "Usama"; // Local variable (not part of an object)
  console.log(this.name); // ❌ Output: undefined (because `this` does not refer to `myName`)
  console.log(this); // Logs global object (window in browsers, global in Node.js)
}
myName(); 


// ✅ Regular function in global scope logs the global object
const newFun = function(){
  let email = "abc@xyz.com"; // Local variable (not part of an object)
  console.log(this); // Logs global object (window in browsers, global in Node.js)
}
newFun();


// ✅ Arrow function behavior
const newArrowFun = () => {
  let gender = 'male';
  console.log(this); // Logs parent scope's `this` (in global execution, it refers to empty object in Node.js, window in browsers)
}
newArrowFun();


// ✅ Simple basic addition using an arrow function
const addTwoNumber = (num1 , num2) => {    
  // If we use curly braces, we need an explicit return statement
  return num1 + num2;
}
console.log(addTwoNumber(2, 4)); // Output: 6


// ✅ Implicit return using round parentheses
const subTwoNumber = (num1, num2) => (num1 - num2);  
console.log(subTwoNumber(4, 6)); // Output: -2


/*
Quick Rule of Thumb

    Use regular functions (function) when working with objects (methods).
    Use arrow functions (=>) inside nested functions, callbacks, and event listeners.
*/