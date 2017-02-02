/**
 * Fizzbuzz
 * 
 * - Print all numbers from 1 to 100.
 * - IF a number is divisible by 3 print "fizz".
 * - IF a number is divisible by 5 print "buzz".
 * - IF a number is divisible by 3 and 5 print "fizzbuzz".
 */

for (var i = 1; i <= 100; i++) {
  if (0 == i % 3 && 0 == i % 5) {
    console.log("fizzbuzz");
  }
  else if (0 == i % 3) {
    console.log("fizz");
  }
  else if (0 == i % 5) {
    console.log("buzz");
  }
  else {
    console.log(i);
  }
}