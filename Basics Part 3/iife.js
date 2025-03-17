// 🔹 Immediately Invoked Function Expression (IIFE) is a function that runs immediately after being defined.
// 🔹 It helps prevent global scope pollution and creates a private scope for variables.

(function () {
  console.log("IIFE Executed!"); // Output: IIFE Executed!
})(); 
// 🔹 The function is wrapped in parentheses ()
// 🔹 The last () invokes the function immediately
// 🔹 The semicolon (;) is important to avoid errors if multiple IIFEs are used

// ✅ Named IIFE
(function chai() {
  console.log("DB Connected!"); // Output: DB Connected!
})(); // Semicolon is mandatory to prevent errors if multiple IIFEs are used.

// ✅ Unnamed Arrow Function IIFE
(() => {
  console.log("DB Connected via Arrow Function!");
})();

// ✅ IIFE with Parameters
((name) => { 
  console.log(`DB Connected by ${name}`);
})("Usama");

// ✅ Protecting Variables with IIFE
(function () {
  let secretKey = "12345"; // Private variable, not accessible outside
  console.log("Secret Key is initialized!");
})();

// console.log(secretKey); ❌ ERROR: secretKey is not defined
