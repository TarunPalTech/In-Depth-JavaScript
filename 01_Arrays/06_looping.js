let cricketers = ["Subhman", "Rituraj", "Ishan", "Axar"];

/* Traditional/Classic for loop */

for (let i = 0; i < cricketers.length; i++) {
  console.log(cricketers[i]);
}

/* for...of loop */

for (let val of cricketers) {
  // for...of iterates over values instead of indexes
  console.log(val);
}

/* for...in loop */

for (let val in cricketers) {
  // The for...in loop works on the keys (indexes in arrays, property names in objects), not on the values
  console.log(cricketers[val]);
}

/* while loop */

let val = 0;

console.log("while loop...");

while (val < cricketers.length) {
  console.log(cricketers[val]);
  val++;
}

/* do...while loop */

val = 0;

console.log("do...while loop:");

do {
  console.log(cricketers[val]);
  val++;
} while (val < cricketers.length);

// There are total 5 loops in javascript...