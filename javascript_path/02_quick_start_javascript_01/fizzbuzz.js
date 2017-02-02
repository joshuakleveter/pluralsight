/**
 * Generate a random whole number between 0 and 15.
 * 
 * IF the number is divisible by 3 alert "fizz"
 * 
 * IF the number is divisible by 5 alert "buzz"
 * 
 * IF the number is divisible by 3 and 5 alert "fizzbuzz"
 * 
 * ELSE log the number to the console.
 * 
 * IF the number is 0 it should not return "fizz", "buzz", or "fizzbuzz"
 */

function fizzBuzz() {

  var number = Math.round( Math.random() * 15 );

  if (0 === number) {
    console.log(number);
  }
  else if (0 === number % 3 && 0 === number % 5) {
    alert("fizzbuzz");
  }
  else if (0 === number % 3) {
    alert("fizz");
  }
  else if (0 === number % 5) {
    alert("buzz");
  }
  else {
    console.log(number);
  }

}