/**
 * Generate a random number between 0 and 5.
 * 
 * if the result is divisible by 3 alert 'fizz'
 * 
 * if the result is divisible by 5 alert 'buzz'
 * 
 * else print the number to the console.
 */

function fizzBuzz() {

  var number = Math.round( Math.random() * 5 );

  if (0 == number % 3) {
    console.log("fizz");
  }
  else if ( 0 == number % 5) {
    console.log("buzz");
  }
  else {
    console.log(number);
  }

}

fizzBuzz();