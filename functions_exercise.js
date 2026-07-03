// // Functions Declaration

// function greetGuest(name) {
//   return `Welcome to movie night, ${name}!`;
// }

// function calculateTotalSnacks(numGuests, snacksPerGuest) {
//   return numGuests * 2;
// }
 
// function isEnoughPizza(numSlices, numGuests) {
//   return numSlices >= numGuests * 3;
// }
  
// console.log(greetGuest("Sam"));							
// //	"Welcome	to	movie	night,	Sam!"
// console.log(calculateTotalSnacks(4));	//	8
// console.log(isEnoughPizza(12,	4));				
// //	true
// console.log(isEnoughPizza(10,	4));

// Function Expressions

// const greetGuest = function(name) {
//   return `Welcome to movie night, ${name}!`;
// };

// const calculateTotalSnacks = function(numGuests, snacksPerGuest) {
//   return numGuests * 2;
// };

// const isEnoughPizza = function(numSlices, numGuests) {
//   return numSlices >= numGuests * 3;
// };

// Arrow Functions


const greetGuest = (name) => `Welcome to movie night, ${name}!`;

const calculateTotalSnacks = (numGuests, snacksPerGuest) => numGuests * 2;

const isEnoughPizza = (numSlices, numGuests) => numSlices >= numGuests * 3;

console.log(greetGuest("Sam"));							
//	"Welcome	to	movie	night,	Sam!"
console.log(calculateTotalSnacks(4));	//	8
console.log(isEnoughPizza(12,	4));				
//	true
console.log(isEnoughPizza(10,	4));
