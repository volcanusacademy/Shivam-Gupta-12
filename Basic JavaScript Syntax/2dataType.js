// Strings
let firstName = "John";
let lastName = 'Doe';
let sentence = "Hello, World!";
document.write(firstName + "<br>");
document.write(lastName + "<br>");
document.write(sentence + "<br>");

// Numbers:
let age = 25;
document.write(age + "<br>");
let price = 19.99;
document.write(price + "<br>");

// Booleans:
let yes = true;
document.write(yes + "<br>");
let no = false;
document.write(no + "<br>");

// Arrays:
let fruits = ['apple', 'banana', 'cherry'];
document.write(fruits.join(", ") + "<br>");
let mixedArray = [1, "two", true, null];
document.write(mixedArray.join(", ") + "<br>");

// Objects:
let person = {
  firstName: 'Hello',
  lastName: 'World',
  age: 30,
  isStudent: true,
};

document.write(person.firstName + " " + person.lastName + " " + person.age + " " + person.isStudent + "<br>");

// Undefined:
let notDefined;
document.write("Undefined variable: " + notDefined + "<br>");
