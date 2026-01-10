let cricketers = ["Subhman","Rituraj","Ishan","Axar"];

/* push() - adds a value at the end of the array */

let result = cricketers.push("Rohit Sharma");

console.log(cricketers); // [ 'Subhman', 'Rituraj', 'Ishan', 'Axar', 'Rohit Sharma' ]

console.log(result);  // 5


/* unshift() - adds a value at the start of an array */

result = cricketers.unshift("The Great Sachin Tendulkar");

console.log(cricketers);

console.log(result); // 6


/* [
  'The Great Sachin Tendulkar',
  'Subhman',
  'Rituraj',
  'Ishan',
  'Axar',
  'Rohit Sharma'
] */


// Both of these methods change the actual array and return the length of the array after adding a new value