"use strict";

//TODO: Write a function named 'typeOfValue' that takes in a value and returns its type.

// console.log(typeOfValue("hello"), 'string');      // "string"
// console.log(typeOfValue(123), 'number');         // "number"
// console.log(typeOfValue([]), 'object');          // "object"
// console.log(typeOfValue([4, 5, 6]), 'object');     // "object"

function typeOfValue(x) {
    return typeof(x);
}




//TODO: Write a function named 'isPositive' that takes in a number and returns true or false based on whether the input is positive.

// console.log(isPositive(2), true);         // true
// console.log(isPositive(-4), false);       // false
// console.log(isPositive(0), false);        // false

function isPositive(x) {
    return x > 0;
}




//TODO: Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

console.log(getLowestNumber(1, 3, 2));         // 1
console.log(getLowestNumber(0, 1, "2"));        // 0
console.log(getLowestNumber(1, 2, 'x'));        // false

function getLowestNumber(x, y, z) {
    if(isNaN(x) || isNaN(y) || isNaN(z)) {
        return false;
    } else {
        return Math.min(x, y, z);
    }
}



//TODO: Write a function named subtract that takes in two inputs. If both inputs provided are numeric, subtract will return the difference of both inputs. If one or both inputs is not numeric, subtract should return false.

// console.log(subtract(2, 1), 1);          // 1
// console.log(subtract("2", 4), -2);           // -2
// console.log(subtract(true, false), false);      // false
// console.log(subtract(null, 2), false);
// console.log(subtract('3', '5'), -2);
// console.log(subtract('red', 'blue'), false);

function subtract(x, y) {
    if(isNaN(parseFloat(x) && isNaN(parseFloat(y)))) {
        return false;
    } else {
        return x - y;
    }
}




//TODO: Write a function named divisibleByThree that takes in an input and returns a boolean indicating whether the input is divisible by 3.  Nonnumeric inputs should return false.

// console.log(divisibleByThree(3), true);         // true
// console.log(divisibleByThree("6"), true);       // true
// console.log(divisibleByThree("8"), false);       // false
// console.log(divisibleByThree("red"), false);    // false

function divisibleByThree(x) {
    if (isNaN(parseFloat(x))) {
        return false;
    } else {
        return x % 3 === 0;
    }
}




//TODO: Write a function named isSumLess100 that accepts two inputs (x, y).  If one or more of the inputs is nonnumeric, return false.  Return true if the sum of both inputs is less than 100, otherwise return false.

// console.log(isSumLess100(2, 49), true);           // true
// console.log(isSumLess100("7", 97), false);         // false
// console.log(isSumLess100("puppy", 8), false);      // false
// console.log(isSumLess100("50", "49"), true);      // true

function isSumLess100(x, y) {
    if(parseFloat(x) + parseFloat(y) < 100) {
        return true
    } else
        return false
}