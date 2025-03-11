// ✅ Singleton Object (Less common way)
const user1 = Object.create({}); // Creates an empty object with the specified prototype
console.log(user1); // Output: {}

// ✅ Object Literals (Preferred way)
const newSym = Symbol("mykey"); // Creating a unique Symbol property

const newUser = {
  name: "Usama", // String property
  email: "usama@yahoo.com", // String property
  [newSym]: "Hello", // ✅ This is the correct way to create a Symbol property
  age: 25, // Number property
  isLoggedIn: true, // Boolean property
  justLoggedIn: ["10:00", "12:00", "14:00"], // Array property
};

// ✅ Accessing Object Properties

console.log(newUser.name); // Output: Usama
console.log(newUser["name"]); // Output: Usama (✅ Best practice for dynamic property access)
console.log(newUser[newSym]); // Output: Hello (✅ Correct way to access a Symbol property)

// ✅ Modifying Object Properties

newUser.email = "usama@gpt.com"; // Updating email
console.log(newUser.email); // Output: usama@gpt.com

// ❌ Preventing Object Modifications
// Object.freeze(newUser); // ❌ Uncommenting this will prevent changes to the object

newUser.email = "usama@google.com"; // ❌ This change won't apply if freeze is used
newUser.age = 26; // ❌ This change won't apply if freeze is used

console.log(newUser); // ✅ Check if modifications applied

// ✅ Adding Methods to Objects

newUser.greeting = function () {
  console.log(`Your name is ${this.name} and your email is ${this.email}`);
};

console.log(newUser.greeting()); // Output: "Your name is Usama and your email is usama@google.com"
