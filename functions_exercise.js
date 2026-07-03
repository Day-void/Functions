// Functions Declaration

function greetGuest(name) {
  return `Welcome to movie night, ${name}!`;
}

function calculateTotalSnacks(numGuests, snacksPerGuest) {
  return numGuests * 2;
}
 
function isEnoughPizza(numSlices, numGuests) {
  return numSlices >= numGuests * 3;
}
  
console.log(greetGuest("Sam"));							
//	"Welcome	to	movie	night,	Sam!"
console.log(calculateTotalSnacks(4));	//	8
console.log(isEnoughPizza(12,	4));				
//	true
console.log(isEnoughPizza(10,	4));