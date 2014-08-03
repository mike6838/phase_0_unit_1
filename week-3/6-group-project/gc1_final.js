// My role in the group is: Person 1 -  Translate tests into user stories - Michael Teevan

// Here is my part of the challenge:

// Hi,

// I am a high school teacher that needs a program to calculate the grades
// for both of the classes I teach. The only discernable difference between 
// the two classes is that one has an even amount of students, while the 
// other has an odd amount of students. I want to be able to calculate 
// the total of my students’ grades for both classes. I also want the program 
// to calculate the average of the students’ grades for both classes. My last 
// request for you is that I’d like the program to find the median grade for 
// each of my classes. Is that possible? I’d really appreciate it! 
// Thank you so much!

// Sincerely, 

// Your favorite teacher, XOXO

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// My role in the group is: Person 2 -  Translate user stories into pseudocode  - Nate Beers

// Here is my part of the challenge:

// Here is my part of the challenge:

// I am writing this pesudocode on the premise of being able
// to calculate the grade for 1 student. The code can be easily
// scaled to multiple students, but I have no idea how many
// students are in the class.

// ** Declare variables **
//
// grades = []
// sum = 0
// grade = 0
// avg = 0
//
// Prompt "Total number of assignments?"
// Get numOfGrades
//
// ** Put each score entered into grades array **
//
// FOR (i=0; i < numOfGrades; i++;)
// Prompt "Type in score"
// Get grade
// push each grade into grades array
// END FOR
//
// ** Get sum of all grades in grades array **
//
// FOR (j=0; j < grades.length; j++;)
// sum += grades[j];
// END FOR
//
// avg = (sum / grades.length)
//
// ** Find median of grades **

// IF grades.length is odd, then median is middle number
// IF grades.length is even, median is avg of 2 middle numbers
//
//function median(grades){
// sort array into ascending order grades.sort
// get the length of the list
// if the length is odd, use modulus (%)
// return the middle value
// else
// get the two middle values
// calculate the average of the two values
// return the average }
//
// call function and pass grades array into it as argument
// display Median and Average to user

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// My role in the group is: Person 3 -- Translate Pseudocode into Code - Nelly Lam

// Here is my part of the challenge:

// I am writing this pesudocode on the premise of being able
// to calculate the grade for 1 student. The code can be easily
// scaled to multiple students, but I have no idea how many
// students are in the class.

// ** Declare variables **
//
// grades = []
var grades = [];
// sum = 0
var sum = 0;
// grade = 0
var grade = 0;
// avg = 0
var avg = 0;
//
// Prompt "Total number of assignments?"
var numOfGrades = parseInt(prompt("Total number of assignments?"),10);
// Get numOfGrades

//
// ** Put each score entered into grades array **
//
// FOR (i=0; i < numOfGrades; i++;)
// Prompt "Type in score"
// Get grade
// push each grade into grades array
// END FOR
for (var i = 0; i < numOfGrades; i++){
var grade = parseInt(prompt("Type in score"), 10);
grades.push(grade);
}
//
// ** Get sum of all grades in grades array **
//
// FOR (j=0; j < grades.length; j++;)
// sum += grades[j];
// END FOR
//
// avg = (sum / grades.length)
for (var j = 0; j < grades.length; j++){
sum += grades[j];
}
avg = sum / grades.length;
//
// ** Find median of grades **

// IF grades.length is odd, then median is middle number
// IF grades.length is even, median is avg of 2 middle numbers
//
//function median(grades){
// sort array into ascending order grades.sort
// get the length of the list
// if the length is odd, use modulus (%)
// return the middle value
// else
// get the two middle values
// calculate the average of the two values
// return the average }
//
var median = function(grades){
grades.sort(function(a, b){return a-b});
if (grades.length % 2 !== 0){
median = grades[Math.floor(grades.length/2)];
}
else {
num1 = grades[grades.length/2 - 1];
num2 = grades[grades.length/2];
median = (num1 + num2)/2;
}
};

median(grades);
// call function and pass grades array into it as argument
// display Median and Average to user
console.log("Median: " + median.toString());
console.log("Average: " + avg.toString());

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// My role in the group is: Person 4 - Refactor and translate - Robert Kramer

// Here is my part of the challenge:

// Refactor:

var avg=0, grade=0, sum=0;
var grades = [];
var numOfGrades = parseInt(prompt("Total number of assignments?"),10);

for (i = 0; i < numOfGrades; i++){
grade = parseInt(prompt("Type in score"), 10);	
grades.push(grade);
}
for (j = 0; j < numOfGrades; j++){	
sum += grades[j];
}
avg = sum / numOfGrades;

var median = function(grades){
grades.sort(function(a, b){return a-b});	
if (numOfGrades % 2 !== 0){
median = grades[Math.floor(numOfGrades/2)];	
}
else {
num1 = grades[numOfGrades/2 - 1];
num2 = grades[numOfGrades/2];
median = (num1 + num2)/2;
}
};

median(grades);
console.log("Median: " + median.toString());
console.log("Average: " + avg.toString());

// User Story:
// As a user, this code will prompt me for the total number of grades I wish to input.
// The code will then prompt me for each grade, one at a time.
// After I have entered all of the grade, the code will calculate the average and the median of the grades.
// Finally, the average and the median will be output to my screen.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Tests:  Do not alter code below this line.

oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

// tests for mean
assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

// tests for median
assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)