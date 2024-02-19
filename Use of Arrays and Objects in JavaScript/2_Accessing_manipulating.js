// Create an array and an object
const fruits = ["apple", "banana", "cherry"];
const person = {
  name: "John",
  age: 30,
};

// Accessing and modifying data in the array
const firstFruit = fruits[0]; 
fruits[1] = "kiwi"; 
fruits.push("orange");
fruits.push("Mango");
const removedFruit = fruits.pop(); 
fruits.splice(1, 1, "grape"); 

// Accessing and modifying data in the object
const name = person.name; 
const age = person["age"];
person.age = 31; 
person.city = "New York"; 
delete person.age; 

// Output the results
console.log("Array:", fruits);
console.log("Object:", person);
