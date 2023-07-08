/*
  ES2015 Exercises
  Unit 10 of Springboard SWE Bootcamp
   
  Solution by José Delpino
*/

// Refactoring Using ES2015!!

// Refactoring Global Constants
// ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!
// ES2015 Global Constants
const PI = 3.14; // This is the right way!

// Refactoring with Arrow Fuctions

// Doubling an array
function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

function doubleWithArrows(arr) {
    return arr.map(val => val * 2);
}
                    
// Square & Evens

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
        return num ** 2;
    });
    var evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
}

function squareAndFindEvensWithArrows(numbers){
    return numbers
        .map(number => number ** 2) // Squares
        .filter(square => square % 2 === 0); // Evens

// Rests & Spreads

// Object Enhacement

// Destructuring

// Maps & Sets
