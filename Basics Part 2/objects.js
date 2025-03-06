// Singleton
//Object.create(); // Creates a new object with the specified prototype object and properties.

//Object Literals

const newSym = Symbol("mykey");

const newUser = {
  name: "Usama",
  email: "usama@yahoo.com",
  [newSym]: "Hello", //This is the only way to create a symbol property
  age: 25,
  isLoggedIn: true,
  justLoggedIn: ["10:00", "12:00", "14:00"],
};

console.log(newUser.name); // Usama
console.log(newUser["name"]); // Usama best way to access the object properties
console.log(newUser[newSym]); // Hello // to access the symbol property
newUser.email = "usama@gpt.com";
//Object.freeze(newUser); // freeze method will prevent the object from modifying
newUser.email = "usama@google.com";
newUser.age = 26;
console.log(newUser);

newUser.greeting = function () {
  console.log(`Your name is ${this.name} and your email is ${this.email}`);
};

console.log(newUser.greeting());
