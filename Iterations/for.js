// 🔹 Basic `for` Loop (Counting 1 to 10)
for (let i = 1; i <= 10; i++) {
  const num1 = i; // Assigning the loop variable to num1
  console.log(num1); // Printing each number from 1 to 10
}

// 🔹 Nested `for` Loop (Multiplication Table Generator)
for (let i = 1; i <= 10; i++) {
  console.log(`This is the table of ${i}`); // Prints the table heading
  
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`); // Prints multiplication results
  }
}

// 🔹 Looping Through an Array
const myArr = ["Superman", "Ironman", "Thor"];
for (let index = 0; index < myArr.length; index++) {
  const arrElement = myArr[index]; // Accessing each array element
  console.log(arrElement); // Printing each superhero name
}

// 🔹 `break` Statement (Stop Loop When 5 is Detected)
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log(`5 is detected`);
    break; // Stops the loop completely when index = 5
  }
  console.log(`The value is ${index}`);
}

// 🔹 `continue` Statement (Skip 5, But Continue Looping)
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log(`5 is detected`);
    continue; // Skips the rest of the loop when index = 5, but continues iteration
  }
  console.log(`The value is ${index}`);
}
