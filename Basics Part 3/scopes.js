// Function demonstrating JavaScript scope
function one() {
	// 'username' is declared inside function 'one' → It has FUNCTION SCOPE
	const username = "Usama";

	// Nested function inside 'one'
	function two() {
		// 'age' is declared inside function 'two' → It has FUNCTION SCOPE (only accessible inside 'two')
		const age = 22;

		// 'age' can be accessed here because it's inside 'two'
		console.log(age); // Output: 22

		// 'username' can also be accessed here because 'two' is inside 'one'
		console.log(username); // Output: Usama
	}

	// ❌ Trying to access 'age' outside 'two' will cause an ERROR because 'age' is only available inside 'two'
	//console.log(age); // ❌ ERROR: age is not defined

	// Calling 'two' inside 'one'
	two();
}

// Calling 'one' function to execute the code
one();



//******************* IMPORTANT ****************************************

//This code demonstrates Hoisting in JavaScript

console.log(addOne(3)); // ✅ Works fine → Output: 4

function addOne(num) {
	return num + 1;
}
//✔️ The function addOne() is a Function Declaration.
//✔️ Hoisting in JavaScript moves function declarations to the top of the file before execution.
//✔️ This means that addOne() exists in memory before the code runs, so it can be used before it is defined.



console.log(addTwo(3)); // ❌ ERROR: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
	return num + 2;
};
//✔️ addTwo is assigned using a Function Expression (stored inside a const variable).
//✔️ Hoisting works differently for Function Expressions.
//✔️ addTwo is not initialized yet when console.log(addTwo(3)) runs.
//✔️ JavaScript only hoists the variable addTwo, but it remains undefined until the assignment happens.


