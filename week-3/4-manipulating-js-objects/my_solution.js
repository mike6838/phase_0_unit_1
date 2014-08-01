// I worked on this challenge: [with Nelly]


// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

var adam = {};

adam.name = "Adam"

terah.spouse = adam
terah.weight = 125

delete terah.eyeColor

adam.spouse = terah

terah.children = {}

terah.children.carson = {name: "Carson"}
terah.children.carter = {name: "Carter"}
terah.children.carter = {name: "Colton"}

adam.children = terah.children



// __________________________________________
// Reflection: Use the reflection guidelines
// I worked on this exercise with Nelly; we had a lot of trouble because we didn’t read 
// the instructions carefully enough but we had a really great time and learned a lot. 
// At first, we didn’t read (or maybe disregarded) the instruction that told us to not alter
// the original code. As a result, we messed around the original function and created a ton
// of issues. It forced us to learn more about variable scope and solve a lot of problems. 
// When we thought we were done, Nelly realized that the original instructions told us we 
// couldn’t change the original function. We decided to start over and delete all of our code. 
// This ended up being a great thing and we soon figured out that the way we were supposed to 
// work on the challenge was much easier than the way we thought we were supposed to work on the 
// challenge. Nelly and I finished the challenge very quickly the second time around. I really 
// enjoyed working on the challenge with Nelly and learned a lot about her. At no time did I feel that 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
