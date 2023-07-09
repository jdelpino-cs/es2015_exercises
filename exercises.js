/*
  ES2015 Exercises
  Unit 10 of Springboard SWE Bootcamp
   
  Solution by José Delpino
*/

// Refactoring Using ES2015!!

// [1] Refactoring Global Constants
// ES5 Global Constants
var PI_ES5 = 3.14;
PI_ES5 = 42; // stop me from doing this!
// ES2015 Global Constants
const PI_ES2015 = 3.14; // This is the right way!

// [2] Refactoring with Arrow Fuctions

// [2.1] Doubling an array
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

function doubleWithArrows(arr) {
  return arr.map((val) => val * 2);
}

// [2.2] Square & Evens

function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

function squareAndFindEvensWithArrows(numbers) {
  return numbers
    .map((number) => number ** 2) // Squares
    .filter((square) => square % 2 === 0); // Evens
}

// [3] Rests & Spreads
// [3.1] Filtering
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

function filterOutOddsWithRestAndArrow(...numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

// [3.2] findMin ---> Write a function called findMin that accepts
// a variable number of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.

function findMin(...numbers) {
  return numbers.reduce((min, number) => (min > number ? number : min));
}

// [3.3] Merge Objects ---> Write a function called mergeObjects
// that accepts two objects and returns a new object which contains
// all the keys and values of the first object and second object.

function mergeObjects(object1, object2) {
  return { ...object1, ...object2 };
}

// [3.4] doubleAndReturnArgs ---> Write a function called doubleAndReturnArgs
// which accepts an array and a variable number of arguments. The function
// should return a new array with the original array values
// and all of additional arguments doubled.

function doubleAndReturnArgs(array, ...rest) {
  const doubled = rest.map((element) => element * 2);
  return [...array, ...doubled];
}

// [3.4] Slice and Dice! For this section, write the following functions using rest,
// spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object
//  and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  itemsFiltered = [...items];
  indexFiltered = itemsFiltered.splice(randomIndex, 1);
  return [itemsFiltered, indexFiltered];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return { ...obj, [key]: val };
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  const objCopy = { ...obj };
  delete objCopy[key];
  return objCopy;
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  try {
    if (obj.hasOwnProperty(key)) {
      return { ...obj, [key]: val };
    } else {
      const message1 = `The object doesn't contain the key ${key}.\n\n`;
      const message2 = `Try updating a key that is actually included on it, such as ${Object.keys(
        obj
      ).toString()}`;
      throw new Error(message1 + message2);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// [4] Object Enhacement

// [4.1] Same keys and values

function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

// [4.2] Same keys and values ES2015

// [4.3] Computed Property Names

const favoriteNumber = 42;

const instructor1 = {
  firstName: "Colt",
};

instructor1[favoriteNumber] = "That is my favorite!";

// [4.4] Computed Property Names ES2015

const instructor1_ES2015 = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

// [4.5] Object Methods

const instructor2 = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};

// [4.6] Object Methods ES2015
const instructor2_ES2015 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

// [4.7] createAnimal function

function createAnimal(species, noiseAction, noise) {
  return {
    species,
    [noiseAction]() {
      console.log(noise);
    },
  };
}

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

// [4.8] If you want to use a real object constructor,
// you cannot take advantage of the property shorthands:

function CreateAnimal1(species, noiseAction, noise) {
  this.species = species;
  this[noiseAction] = function () {
    console.log(noise);
  };
}

class CreateAnimal2 {
  constructor(species, noiseAction, noise) {
    this.species = species;
    this[noiseAction] = function () {
      console.log(noise);
    };
  }
}

// [5] Destructuring

// [5.1] Questions
// [5.1.1] Object Destructuring 1. What does the following code return/print?
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// [5.1.2] Object Destructuring 2. What does the following code return/print?
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets: numPlanets2, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// [5.1.3] Object Destructuring 3. What does the following code return/print?
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ?
getUserData({ firstName: "Melissa" }); // 'Your name is Alejandro and you like purple'
getUserData({}); // 'Your name is undefined and you like green'

// [5.1.4] Array Destructuring 1. What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"

// [5.1.5] Array Destructuring 2. What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles",
//                                       "warm woolen mittens",
//                                       "Brown paper packages tied up with strings",]

// [5.1.6] Array Destructuring 3. What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10, 30, 20]

// [5.2] ES2015 Refactoring

// [5.2.1] ES5 Assigning Variables to Object Properties
let obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

// let a = obj.numbers.a;
// let b = obj.numbers.b;

// [5.2.2] ES2015 Object Destructuring
let {
  numbers: { a, b },
} = obj;

// [5.2.2.1] ES2015 Object Destructuring & Swapping at the same time
// let {
//   numbers: { a:b, b:a },
// } = obj;

// [5.2.3] ES5 Array Swap
var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// [5.2.4] ES2015 One-Line Array Swap with Destructuring
[arr[1], arr[0]] = [arr[0], arr[1]];

// [5.2.5] Function raceResults –––> Write a function called raceResults
// which accepts a single array argument. It should return an object
// with the keys first, second, third, and rest.

//        - first: the first element in the array
//        - second: the second element in the array
//        - third: the third element in the array
//        - rest: all other elements in the array

// Write a one line function to make this work using
//        - An arrow function
//        - Destructuring
//        - Enhanced object assignment (same key/value shortcut)

raceResults = ([first, second, third, ...rest]) => {
  ({ first, second, third, rest });
}; // Prettier automatic formattin don't let me put all this in just one line!!!!

// Versions using no arro fuction:
// function raceResults([first, second, third, ...rest]) {
//   return {
//     first,
//     second,
//     third,
//     rest,
//   };
// }

console.log(raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]));

// [6] Maps & Sets

// [6.1] Questions
// [6.1.1] Quick Question 1. What does the following code return?
new Set([1, 1, 2, 2, 3, 4]); //
// [6.1.2] Quick Question 2. What does the following code return?
[...new Set("referee")].join(""); //
// [6.1.3] Quick Question 3. What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// [6.2] hasDuplicate –––> Write a function called hasDuplicate which accepts
// an array and returns true or false if that array contains a duplicate.

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

// [6.3] vowelCount ––––> Write a function called vowelCount which accepts
// a string and returns a map where the keys are numbers and the values are
// the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
