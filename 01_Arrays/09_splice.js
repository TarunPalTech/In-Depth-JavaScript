/* splice() is used to add/remove, or replace elements in an array */

/* It changes the original array */

/* 
Syntax: 
    arr.splice(startIndex, deleteCount, Item1, Item2, ....)
    startIndex: position to start (index where changes begin)
    deleteCount: no of elements to remove (how many elements to remove)
    Item1, Item2...: elements to add(optional) (values to insert at start)
*/

let arr = [10, 20, 30, 40, 50];

/* Remove Elements */

let result = arr.splice(1, 2);

console.log(result); // [ 20, 30 ]

console.log(arr); // [ 10, 40, 50 ]

/* Add Elements */

result = arr.splice(1, 0, 70, 80);

console.log(result); // returns an empty array because delete count is 0 that's why this array is not going to remove any element and splice returns array of removed values...

console.log(arr); // [ 10, 70, 80, 40, 50 ]

/* Using Negative Index */

result = arr.splice(-2, 1);

console.log(result);  // [ 40 ]
