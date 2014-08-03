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

// 
// 
// 
// 
// 
// 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// My role in the group is: Person 4 -  Translate Pseudocode into Code - Nelly Lam

// Here is my part of the challenge:

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

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