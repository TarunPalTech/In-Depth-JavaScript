/* indexOf() - finds position of an element... */

let arr = [10, 20, 30, 40, 50, 60, 70];

let result = arr.indexOf(40);

console.log(result); // 3 (returns the index/position of the first occurrence of a value in an array)

/* 
If value exists - returns index
If value doesn't exist - returns -1
*/

/* 
Syntax:
    arr.indexOf(value, fromIndex)
    value - element to search
    fromIndex(optional) - start searching from here
*/

console.log(arr.indexOf(90)); // -1

console.log(arr.indexOf(30)); // 2

arr = [1, 2, 1, 3, 4, 1];

/* Using from Index... */

console.log(arr.indexOf(1, 2)); // 2

console.log(arr.indexOf(1,3));  // 5

/* 
1. searches from left to right
2. Uses strict equality
3. Works well with primitive values
*/

// Memory Trick : indexOf - where is it?


// [{a:1}].indexOf({a:1}); // -1 (different reference)

/* 
1. Check position of item
2. Manual removal logic
3. Simple searching
*/