// ✅ WORKING WITH THE Number OBJECT

const balance = new Number(1000); // Creates a Number object instead of a primitive number
console.log(balance); // Output: [Number: 1000]
console.log(typeof balance); // Output: "object" (Because it's explicitly created using Number constructor)

// ✅ CREATING A NUMBER OBJECT FROM A STRING

const newNum = new Number("345.36"); // Converts a valid numeric string into a Number object
const newNum2 = 344543525.36; // Regular primitive number

console.log(typeof newNum); // Output: "object" (since we used `new Number()`)

console.log(`The sum of ${newNum} and ${newNum2} is ${newNum + newNum2}.`); 
// Example Output: "The sum of 345.36 and 344543525.36 is 344543870.72."

// ✅ NUMBER FORMATTING METHODS

console.log(newNum2.toFixed(1)); 
// Output: "344543525.4" (Rounds to 1 decimal place, returns a string)

console.log(newNum2.toLocaleString("en-IN")); 
// Output: "34,45,43,525.36" (Formats the number according to Indian number system)


// ✅ FUNCTIONALITY OF Math OBJECT

// 🛠️ Suppose we have two numbers a and b, and we want to generate a random number between them
const a = 10;
const b = 20;

// STEP 1: Generate a random number between 0 and 1
console.log(Math.random()); 
// Example Output: 0.65719283 (Random decimal between 0 and 1)

// STEP 2: Scale it up (Remove any chances of getting exactly 0)
console.log(Math.random() * 10); 
// Example Output: 6.5719283 (Random decimal between 0 and 10)

// STEP 3: Convert it into an integer (Remove decimal points)
console.log(Math.floor(Math.random() * 10) + 1); 
// Example Output: 7 (Random integer between 1 and 10)

// STEP 4: Generate a random number between a and b
console.log(Math.floor(Math.random() * (b - a + 1) + a)); 
// Example Output: 16 (Random integer between 10 and 20)

// ✅ STORING A RANDOM NUMBER IN A VARIABLE
const randomNum = Math.floor(Math.random() * (b - a + 1) + a);
console.log(randomNum); 
// Example Output: 12 (Random number between 10 and 20)


/*
🎯 Key Takeaways
✔ JavaScript has two types of numbers: Primitive numbers (const num = 100;) and Number objects (const numObj = new Number(100);).
✔ Avoid using new Number() unless necessary, because it creates an object instead of a primitive value.
✔ toFixed(n) rounds a number to n decimal places and returns a string.
✔ toLocaleString("en-IN") formats numbers according to the Indian numbering system.
✔ The Math.random() function generates a random decimal between 0 and 1.
✔ Use Math.floor() to remove decimals and get whole numbers.
*/