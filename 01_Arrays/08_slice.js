/* slice() is used to extract a part of an array and returns it as a new array */

/* It doesn't change the new array */

/* 
Syntax:
    arr.slice(startIndex, endIndex);
    startIndex - included
    endIndex - excluded
    Both are optional
*/

let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1,4);

console.log(result);  // [ 20, 30, 40 ]

console.log(arr);  // [ 10, 20, 30, 40, 50 ]

// original array remains unchanged...


/* slice() from a single index... */

result = arr.slice(2);

console.log(result);  // [ 30, 40, 50 ]

// from starting index to the end index...

// You can not pass end index directly , default value for the startIndex is 0...


/* Negative Index */

result = arr.slice(-3);

console.log(result);  // [ 30, 40, 50 ]

// negative indexing starts from -1



/* Copy an entire array... */

result = arr.slice();

console.log(result);  // [ 10, 20, 30, 40, 50 ]

