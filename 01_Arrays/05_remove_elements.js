/* Remove Elements */

let cricketers = ["Subhman","Rituraj","Ishan","Axar"];

/* pop() - removes a value from last */

let result = cricketers.pop();

console.log(cricketers);  // [ 'Subhman', 'Rituraj', 'Ishan' ]


console.log(result);  // Axar

result = cricketers.shift();  

console.log(cricketers);  // [ 'Rituraj', 'Ishan' ]

console.log(result);  // Subhman


// Both of these methods mutate the original array and return the element that is removed
