// Falsy Values - These are treated as "false" in conditional checks
// false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN

// Truthy Values - These are treated as "true" in conditional checks
// "0", "false", " " (any non-empty string), [], {} (empty array & object), function(){} (any function)

// ✅ Example: Checking if an array is empty
const userEmail = [];
if (userEmail.length === 0) console.log("Array is empty"); // ✔ Output: Array is empty

// ✅ Example: Checking if an object is empty
const empObj = {}; 
if (Object.keys(empObj).length === 0) console.log("Object is empty"); // ✔ Output: Object is empty

// ✅ Weird JavaScript comparisons (due to type coercion)
console.log(false == 0);   // ✔ Output: true (JS treats false as 0)
console.log(false == "");  // ✔ Output: true (false and empty string are both falsy)
console.log(0 == "");      // ✔ Output: true (JS treats empty string as 0)

/*
Nullish Coalescing Operator (??) in JavaScript

The Nullish Coalescing Operator (??) is used to provide a default value when a variable is null or undefined.
✅ Why Use ?? Instead of ||?

    || (Logical OR) considers falsy values (0, "", false, null, undefined, NaN) as false.
    ?? (Nullish Coalescing) only considers null and undefined as "missing" values, ignoring other falsy values like 0 and "".

✅ Example Usage
*/
let username = null;
console.log(username ?? "Guest");  // ✔ Output: Guest (because username is null)

let age = 0;
console.log(age || 18);  // ❌ Output: 18 (because 0 is falsy)
console.log(age ?? 18);  // ✔ Output: 0 (because 0 is NOT null or undefined)

//✅ When to Use ???

  //	When only null or undefined should trigger a fallback value.
  //	Useful in APIs or user inputs where 0 or "" are valid values.