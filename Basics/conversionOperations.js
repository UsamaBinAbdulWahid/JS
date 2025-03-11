// ✅ Declaring two numeric variables
let num1 = 1;
let num2 = 2;

// ✅ Simple addition of numbers
console.log(1 + 1); // Output: 2  (Basic arithmetic: 1 + 1 = 2)

// ✅ Number + String → String Concatenation (NOT arithmetic)
console.log(1 + "1"); // Output: "11"  
/*
   🔹 When a number is added to a string, JavaScript converts the number to a string.
   🔹 So, 1 (number) + "1" (string) becomes "1" + "1" = "11" (string).
*/

// ✅ String + String → String Concatenation
console.log("1" + "1"); // Output: "11"
/*
   🔹 Both values are strings, so JavaScript just joins them.
   🔹 "1" + "1" = "11"
*/

// ✅ String + Number + Number → Everything converts to a string
console.log("1" + 2 + 2); // Output: "122"
/*
   🔹 "1" + 2 → JavaScript converts 2 into a string → "1" + "2" = "12"
   🔹 "12" + 2 → JavaScript converts 2 into a string → "12" + "2" = "122"
*/

// ✅ Number + Number + String → First adds numbers, then converts to string
console.log(1 + 2 + "2"); // Output: "32"
/*
   🔹 1 + 2 = 3 (Addition happens first)
   🔹 3 + "2" → JavaScript converts 3 into a string → "3" + "2" = "32"
*/

// ✅ Additional Test Cases for Better Understanding
console.log(5 + "5" + 5);   // Output: "555"   (Number → String Concatenation)
console.log(5 + 5 + "5");   // Output: "105"   (Addition → String Concatenation)
console.log("5" + (5 + 5)); // Output: "510"   (Parentheses prioritize addition first)
console.log(5 + "5" * 2);   // Output: "510"   (Multiplication happens first)
console.log("5" - 2);       // Output: 3       (JavaScript converts "5" to a number)
console.log("5" * 2);       // Output: 10      (Multiplication forces number conversion)
console.log("5" / "2");     // Output: 2.5     (Division also forces number conversion)
console.log("hello" * 2);   // Output: NaN     (Multiplication fails for non-numeric strings)
