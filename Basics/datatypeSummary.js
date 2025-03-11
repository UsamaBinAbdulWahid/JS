/* 
 ****************1. Primitive Data Types (Call by Value)********************

🔹 Stored in Stack Memory (Faster, fixed memory)
🔹 Immutable (Cannot be changed once created)
🔹 Copied by Value (Each variable gets its own separate copy)
*/

// ✅ 1. Number
const num = 23;  

// ✅ 2. String
const str = "Hello World";  

// ✅ 3. Boolean
const isLoggedIn = false;  

// ✅ 4. Undefined (No value assigned)
let val;  
console.log(val); // Output: undefined  

// ✅ 5. Null (Empty value, explicitly set)
const temp = null;  
console.log(temp); // Output: null  

// ✅ 6. Symbol (ES6) - Unique identifiers
const id1 = Symbol("123"); 
const id2 = Symbol("123"); 
console.log(id1 == id2); // Output: false (Each symbol is unique)

// ✅ 7. BigInt (ES11) - For large numbers beyond Number.MAX_SAFE_INTEGER
const bigNum = 4723462397341234908n;  
console.log(bigNum + 2n); // Output: 4723462397341234910n

/*
💡 Important Notes on Primitive Data Types:

    Symbols are always unique, even if they have the same description.
    null is an intentional empty value, while undefined means no value was assigned.
    BigInt is used for very large numbers that cannot be represented using the normal Number type.
*/
//✅ Example of Stack (Call by Value)
let x = 10;
let y = x; // Copying value of x into y
y = 20;

console.log(x); // Output: 10 (Original remains unchanged)
console.log(y); // Output: 20 (Only copy changed)



/*
*************2. Non-Primitive (Reference) Data Types (Call by Reference)*************

🔹 Stored in Heap Memory (Slower, dynamic memory)
🔹 Mutable (Can be changed after creation)
🔹 Copied by Reference (Different variables point to the same memory location)
*/
// ✅ 1. Object - Key-Value Pair
let myDetails = {
  name: "Usama",
  age: 20,
  isMale: true,
};
console.log(myDetails.name); // Output: "Usama"

// ✅ 2. Function (Functions are also objects in JavaScript)
const myFunction = function () {
  console.log("Hello World");
};
myFunction(); // Output: "Hello World"

// ✅ 3. Array - Collection of Elements
const heroes = ["Ironman", "Spiderman", "Superman"];
console.log(heroes[1]); // Output: "Spiderman"

// ✅ 4. Date Object
const today = new Date();
console.log(today); // Output: Current date and time

// ✅ 5. Regular Expression (RegExp)
const regex = /hello/;
console.log(regex.test("hello world")); // Output: true

// ✅ 6. Map - Key-Value Pair but Maintains Order
const myMap = new Map();
myMap.set("name", "Usama");
console.log(myMap.get("name")); // Output: "Usama"

//✅ Example of Heap (Call by Reference)
let obj1 = { name: "Usama" };
let obj2 = obj1; // Reference is copied, not value
obj2.name = "Ali";

console.log(obj1.name); // Output: "Ali"
console.log(obj2.name); // Output: "Ali"




/*
🚀 Final Takeaways

✔ Primitive Data Types (Number, String, Boolean, etc.) are stored in Stack, immutable, and passed by Value.
✔ Non-Primitive Data Types (Objects, Arrays, Functions, etc.) are stored in Heap, mutable, and passed by Reference.
✔ Stack is faster than Heap, but Heap allows for dynamic memory allocation.
✔ Always be careful when modifying objects because changes affect all references.
*/