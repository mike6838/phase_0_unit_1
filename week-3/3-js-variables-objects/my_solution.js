// I paired [with Rob Kramer] on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7
var password = "just open the door"
var allowedIn = true
var members = ["John", "Mike", "Sally", "Mary"]

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 

// I paired with another on this exercise, which worked out well. I had 
// a lot of trouble understanding the instructions on read.me file and 
// my partner helped me better understand. The exercise was fairly easy, 
// since there was no internal logic used creating functions. We were tasked 
// to define variables and arrays, which we did. Following the directions 
// for the pre written tests went pretty well, also. I’m use to how RSpec 
// prints test results, going through all the failed tests, and not just 
// stopping after the first one on the list had failed. Although, this might 
// have been an option I overlooked on the consoles of Firebug and DevTools. 
// I feel like I understand the syntax to create variables within JavaScript. 
// The most tedious part of this challenge was understanding the instructions. 
// I really appreciated the JS Intro guide that was linked on GitHub. 

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

