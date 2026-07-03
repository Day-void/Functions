// //A function is a reusable block of code that performs a specific task. Instead of writing the same code over and over, you write it once inside a function, then "call" it (run it) whenever you need it.
// name = prompt("Enter your name:");
// function greet(name){
//   console.log("Hello," + name);  
// }

// greet(name);

// function add(a, b){
//     console.log(a + b);
// }

// add(5, 3);
//  Function types
// // 1. Function Declaration
// // A function declaration is a way to define a function using the "function" keyword followed by the function name and a set of parentheses. Function declarations are hoisted, meaning they can be called before they are defined in the code.
// function greet(name){
//     console.log("Hello," + name);  
// }

// greet("Void");
// 2. Function Expression
// function expression is a function that is assigned to a variable. It can be anonymous (without a name) or named. Function expressions are not hoisted, meaning they cannot be called before they are defined.
// const login = function(name){
//      console.log("You are logged in as " + name); 
// }
// login("Noctis");

// 3. Arrow Function
// An arrow function is a concise way to write a function in JavaScript. It uses the "=>" syntax and does not have its own "this" context. Arrow functions are often used for short, single-line functions or as callbacks.

// const logout = (name) => {
//     console.log("Goodbye," + name);  
// };

// logout("Noctis");

// //  With parameters
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(5, 3));

// 4 Anonymous Function
// An anonymous function is a function that does not have a name. It is often used as an argument to another function or assigned to a variable. Anonymous functions are commonly used in callbacks and event handlers.
// let names = ["Void", "Noctis", "Shadow", "Ghost"];

// names.forEach(function(name) {
//   console.log(name);
// });

// const button = document.getElementById("myButton");
// button.addEventListener("click", function() {
//   console.log("Button clicked!");
// });

// Functions with parameters
// function greet(name, age) {
//     console.log("Hello, " + name + "! You are " + age + " years old.");
//   }

//   name = prompt("Enter your name:");
//   age = prompt("Enter your age:");
//   greet(name, age);