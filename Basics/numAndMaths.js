const balance = new Number(1000);
console.log(balance);
console.log(typeof balance); //object

const newNum = new Number("345.36");
const newNum2 = 344543525.36;
console.log(typeof newNum); //object
console.log(`The sum of ${newNum} and ${newNum2} is ${newNum + newNum2}.`); //690.72

console.log(newNum2.toFixed(1)); //number
console.log(newNum2.toLocaleString("en-IN"));

//Functionality of Math object
//Suppose we have two number a and b, now we want a random number between a and b
const a = 10;
const b = 20;
//Step 1: Generate a random number between 0 and 1
console.log( Math.random());
//Step 2: Remove any chances of getting 0
console.log( Math.random() * 10);
//Step 3: Remove any chances of getting a decimal number
console.log( Math.floor(Math.random() * 10) + 1);
//Step 4: Generate a random number between a and b
console.log( Math.floor(Math.random() * (b - a + 1) + a));

const randomNum = Math.floor(Math.random() * (b - a + 1) + a);
console.log(randomNum);
