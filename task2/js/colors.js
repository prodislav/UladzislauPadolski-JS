'use strict'

function joinElements(array, delimiter) {
    return array.join(delimiter);
}

let array = ["Red", "Green", "White", "Black"];
let firstDelimiter = ',';
let secondDelimiter = '+';

console.log(joinElements(array, firstDelimiter));
console.log(joinElements(array, firstDelimiter));
console.log(joinElements(array, secondDelimiter));
