// For example, we have some characters that we want to log one by one.
console.log("U");
console.log("s");
console.log("a");
console.log("m");
console.log("a");

// This is bad practice because if we need to log these again,
// we would have to write all of these console.log statements again.
// Functions come to the rescue!

// Instead of repeating code, we can define a function that logs the characters.
function sayName() {
	console.log("U");
	console.log("s");
	console.log("a");
	console.log("m");
	console.log("a");
}

// Now, we can call the function whenever we need to log "Usama".
sayName();

// REMEMBER:
// 1. sayName   --> This is just a reference to the function. It does NOT execute it.
// 2. sayName() --> The parentheses () are required to actually CALL and execute the function.


//*********************************************************************
// Function to add two numbers
function addTwoNumbers(number1, number2) {
	/*
		📌 What are Parameters?
		- 'number1' and 'number2' are PARAMETERS.
		- Parameters act as placeholders inside the function.
		- They receive values when the function is called.
	*/

	// Return the sum of number1 and number2
	return number1 + number2;

	// The following line will NEVER execute because 'return' stops the function immediately.
	console.log("My name is Usama"); // ❌ Unreachable code
}

// Calling the function with actual values
const result = addTwoNumbers(3, 7);

/*
	📌 What are Arguments?
	- '3' and '7' are ARGUMENTS.
	- Arguments are the actual values we pass into a function when calling it.
	- These values replace the function's parameters ('number1' and 'number2').
*/

// Printing the result returned by the function
console.log(result); // Output: 10

//***********************************************************************

//Creating a user object with properties 'name' and 'gender'
const user = {
	name: "Usama",
	gender: "Male"
};

/*
	📌 Function to display user data
	- The function accepts an object ('getData') as a parameter.
	- It logs the 'name' and 'gender' properties of the object.
*/
function getUserData(getData) {
	console.log(`Username is ${getData.name} and gender is ${getData.gender}`);
}

//Calling the function and passing the 'user' object as an argument
getUserData(user); // Output: Username is Usama and gender is Male

//Calling the function with a new object directly
getUserData({
	name: "Ali",
	gender: "Male"
}); // Output: Username is Ali and gender is Male


//****************************************************************
//Creating an array of numbers
const newArr = [200, 400, 600, 800];

/*
	📌 Function to return the second value from an array
	- The function accepts an array ('getArr') as a parameter.
	- It returns the second value (index 1) of the array.
*/
function returnSecondValue(getArr) {
	return getArr[1]; // Arrays use zero-based indexing, so index 1 is the second element.
}

//Calling the function with 'newArr' and printing the result
console.log(returnSecondValue(newArr)); // Output: 400

//Calling the function with another array directly
console.log(returnSecondValue([100, 200, 300])); // Output: 200


