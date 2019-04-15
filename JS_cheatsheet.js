// JS comments looks like this

// ------------------------------------------------

// Execute a variable (could also be assigned later)
let myName;
myName = "Ivo";
let secondName = "Deltchev";
console.log("My name is " + myName);
// OR
const myName = "Ivo"; // const needs to be ALWAYS declared

// Another way to display and combine variables using ``
console.log(`My name is ${myName} ${secondName}`);

//Type of - displays the type of variable
let sale = true;
console.log(typeof sale);

// ------------------------------------------------

// MATH OPERATORS
let firstNumber = 25;
let secondNumber = 30;

console.log(firstNumber + secondNumber);
// Adding / Substracting / Deviding / Muplitplying - += -= *= /=
console.log((firstNumber += 10));

// ------------------------------------------------

// CONDITIONALS - either true or false can be used
if (true) {
  console.log("This message will print!");
}
// Prints "This message will print!"

// OR a variable can be nested in ()
let sale = true;
if (sale) {
  console.log("Time to buy!");
}

if (false) {
  console.log("The code in this block will not run.");
} else {
  console.log("But the code in this block will!");
}
// Prints "But the code in this block will!"

// ------------------------------------------------

// COMPARISON OPERATORS  - <, >, <=, >=, ===, !==

10 < 12; // Evaluates to true
"apples" === "oranges"; // false

// Example:
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

// ------------------------------------------------

// lOGICAL OPERATORS - the and operator (&&), the or operator (||), the not operator, otherwise known as the bang operator (!)

// (&&) - both conditions must evaluate to True or it will NOT execute
if (stopLight === "green" && pedestrians === 0) {
  console.log("Go!");
} else {
  console.log("Stop");
}

// (||) - it executes if either conditions are true
if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Do some work.");
}

// (!) - The ! not operator reverses, or negates, the value of a boolean
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

// Truthy and Falsy
// Always truthy:
let myVariable = "I Exist!";
if (myVariable) {
  console.log(myVariable);
} else {
  console.log("The variable does not exist.");
}

// Always falsy - 0, string, null, undefined, NaN
let numberOfApples = 0;

if (numberOfApples) {
  console.log("Let us eat apples!");
} else {
  console.log("No apples left!");
} // Prints 'No apples left!'

// Ternary operator - shortens if / else syntax execution
let isNightTime = true;

if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}
// same statement using Ternary operator:
isNightTime ? console.log("Turn on the lights!") : 
console.log("Turn off the lights!");

// ------------------------------------------------

// ELSE IF statements - add as many as you want. Always located between IF and ELSE statements
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

// ------------------------------------------------

// The SWITCH KEYWORD - shortens syntax for IF, ELSE statments
//example:
let groceryItem = 'papaya';

if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// using switch keyword:
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
} // Prints 'Papayas are $1.29'

// ------------------------------------------------

// FUCNTIONS




