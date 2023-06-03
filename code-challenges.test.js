// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
// 
describe("objArray", () => {
  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(objArray(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// 
// b) Create the function that makes the test pass.
// Pseudocode:
// 
// Input - array of objects with 2 key:value pairs
// Output - array with a sentence about each person with their name capitalized
// Process:
// function to capitalize each word in a string
// using the built in method .split(' ') using a space inside the single quotations as the delimiter for the new array
// using .map(word => ...) to create a new array populated with the results of calling a provided function on every element in the calling array, the function
// calls each element in the array in order
// 'word.chatAt(0).toUpperCase()' -> the .charAt method returns a new string with the substring located at index 0 , the .toUpperCase method converts a string
// to uppercase letters. 
// '+' -> concatenating the elements
// 'word.slice(1)' -> the .slice method extracts a section of a string and returns it as a new string, without modifying the original string
// '.join(' ') -> using the .join method to create and return a new string concatenating all of the elements of an array, separated by the string separator( space in this case)
// 
const capitalizedNames = (str) => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const objArray = (chars) => { 
    return chars.map(char => `${capitalizedNames(char.name)} is ${char.occupation}.`)
  }
// 
// ReferenceError: objArray is not defined
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
// objArray
// ✓ returns an array with a sentence about each person with their name capitalized (4 ms)
// 
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// 
// a) Create a test with an expect statement using the variables provided.
// 
describe("onlyRemainders", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// 
// b) Create the function that makes the test pass.
// 

// Pseudocode:
// 
// Input - array of objects with 2 key:value pairs
// Output - array with a sentence about each person with their name capitalized
// Process:
// 
// 
// 
// 
// ReferenceError: onlyRemainders is not defined
// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]
// 
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// 
// a) Create a test with an expect statement using the variables provided.
// 
describe("theCuber", () => {
  const cubeAndSum1 = [2, 3, 4];
  const cubeAndSum2 = [0, 5, 10];
  it("returns a generic greeting", () => {
    expect(theCuber(cubeAndSum1)).toEqual(99)
    expect(theCuber(cubeAndSum2)).toEqual(1125)
  })
})
// 
// b) Create the function that makes the test pass.
// 
//  Pseudocode:
// 
//  Input - array 
//  Output - sum of all the number from previous array cubed
//  Process:
//  using the .map built in method iterate through the array
//  declare a new variable that will take in the initial array and cube all elements inside that array
//  using the .reduce() built in method in addition to an arrow function, we will set the initial value as zero in the function
//  return the sum of all the numbers from the array after being cubed.
const theCuber = (arr) => {
  const cubed = arr.map((num) => num ** 3)
  const sum = cubed.reduce((a, b)=> a + b , 0);
  return sum
};
// 
// ReferenceError: theCuber is not defined
// Expected output: 99
// Expected output: 1125
// theCuber
// ✓ returns a generic greeting (2 ms)



