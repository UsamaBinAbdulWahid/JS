// ✅ Creating Objects in JavaScript

const newUser = {}; // ❌ Non-Singleton Object (Preferred way to create objects)
console.log(newUser); // Output: {} (Empty object)

const newChar = new Object(); // ✅ Singleton Object (Created using Object constructor)
console.log(newChar); // Output: {} (Same empty object, but using constructor)

// ✅ Adding properties to an object dynamically
newUser.id = "123"; // Adding a key-value pair to newUser
newUser.name = "Usama"; // Another key-value pair
newUser.isLoggedIn = true; // Boolean property
console.log(newUser); // Output: { id: '123', name: 'Usama', isLoggedIn: true }

// ✅ Nested Objects
const regularUser = {
  email: "usamaabdulwahid14@gmail.com",
  name: {
    userFullName: {
      firstName: "Usama",
      lastName: "Wahid",
    },
    userNickName: "Sami",
  },
};

// ✅ Optional Chaining (?.)
// If a property doesn't exist, this prevents errors
console.log(regularUser.name?.userFullName?.firstName); // Output: "Usama"

// ✅ Merging Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// ❌ Using Object.assign (Less common way)
const obj3 = Object.assign({}, obj1, obj2); // Merges obj1 & obj2 into a new empty object
console.log(obj3); // Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

// ✅ Using Spread Operator (Preferred way)
const obj4 = { ...obj1, ...obj2 }; // Merging objects using spread syntax
console.log(obj4); // Output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

// ✅ Real-World Example: Data from Backend (Array of Objects)
const userData = [
  {
    user: "Sami", // First user object
  },
  {}, // Empty object
  {}, // Empty object
];
console.log(userData[0].user); // Output: "Sami" (Accessing the first object's "user" property)

// ✅ Useful Object Methods

// 1️⃣ Get an array of object keys
console.log(Object.keys(regularUser)); // Output: [ 'email', 'name' ]

// 2️⃣ Get an array of object values
console.log(Object.values(regularUser)); // Output: [ 'usamaabdulwahid14@gmail.com', { name object } ]

// 3️⃣ Convert object into an array of [key, value] pairs
console.log(Object.entries(regularUser)); 
// Output: [ ['email', 'usamaabdulwahid14@gmail.com'], ['name', {name object}] ]

// 4️⃣ Check if an object has a specific property
console.log(regularUser.hasOwnProperty("isLoggedIn")); // Output: false (Property does not exist)

// ✅ Object Destructuring & Renaming Variables

const course = {
  fee: 999, // Course fee
  instructor: "Usama", // Instructor name
};

// Destructuring with renaming: instructor → teacher
const { instructor: teacher } = course;

console.log(teacher); // Output: "Usama"

