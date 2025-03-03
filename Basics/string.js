const myName = "Usama";
const myEmail = "usamaabdulwahid14@gmail.com";
const myAge = 20;
console.log(
  `My name is ${myName}, my email is ${myEmail} and my age is ${myAge}`
);

const str = new String("Hello World"); //Best Practice is to use string and other primitive datatypes

const test = "Hello World";
console.log(test.length); //11
console.log(test.toLowerCase()); //hello world
console.log(test.toUpperCase()); //HELLO WORLD
console.log(test.charAt(0)); //H
console.log(test.indexOf("World")); //6
console.log(test.lastIndexOf("World")); //6
console.log(test.endsWith("World")); //true
console.log(test.includes("World")); //true
console.log(test.substring(0, 5)); //Hello
console.log(test.slice(0, 5)); //Hello     Also we can give negative values in slice e.g: console.log(test.slice(-5)); //World

const test2 = "   Usama      ";
console.log(test2.trim()); //Usama
console.log(test2.trimLeft()); //Usama
console.log(test2.trimRight()); //   Usama
//trim only work on whitespaces and it will removes all the extra spaces from start and end.

console.log(test.split(" ")); //["Hello", "World"]
console.log(test[8]);
