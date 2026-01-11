/* 
includes() - checks if value exists
Checks whether an array contains a specific value or not
return true or false
doesn't change the original array

Syntax:
    arr.includes(value,fromIndex)
*/

let arr = [10, 20, 30, 20];

console.log(arr.includes(30)); // true

console.log(arr.includes(10)); // true

console.log(arr.includes(50)); // false

/* Using fromIndex */

console.log(arr.includes(10, 1)); // fromIndex (false)

// fromIndex is always included

/* Special Case - nice feature */

console.log([NaN].includes(NaN)); // true

console.log([NaN].indexOf(NaN)); // -1

// includes correctly handles NaN...

/* 
🧠 Memory Trick
    includes = is it inside?
*/

/* 
🎯 Interview Answer (Perfect)

indexOf() returns the index and cannot detect NaN, while includes() returns a boolean and correctly handles NaN, making includes() better for existence checks.
*/

/* 
🧠 When to use

Simple existence check

Cleaner than indexOf() !== -1
*/

/*
What both can do (overlap)?
    Both can check whether a value exists in an array.
*/

// Value exists or not....
arr.indexOf(10) != -1;

arr.includes(10);
// So yes, for many cases, indexof() can be used like includes().

/* 
The REAL Differences (Important)
🔹 Difference 1: Return Type (BIGGEST difference)
  Method	     Returns
indexOf()	index (number) or -1
includes()	true / false


🔹 Difference 2: NaN handling (CRITICAL)

let arr = [NaN];

arr.indexOf(NaN);   // -1 ❌
arr.includes(NaN);  // true ✅

📌 Reason:
indexOf() uses ===
includes() uses SameValueZero comparison
👉 This alone proves indexOf() cannot fully replace includes().


🔹 Difference 3: Readability & Intent
if (arr.indexOf(x) !== -1) { ... }  // less clear
if (arr.includes(x)) { ... }        // very clear

includes() expresses intent, not logic.


🔹 Difference 4: Use Case
Need	       Better choice
Want position	indexOf()
Just existence	includes()
NaN support	    includes()
*/


/* 
Can indexOf() replace includes()?
❌ Completely? → NO

Because:

Fails for NaN

Less readable

Different intent

✅ Partially? → YES

For simple primitive values, it works.
*/


/* 
Why JavaScript added includes()

Because this pattern was ugly:

arr.indexOf(x) !== -1

So JS added:

arr.includes(x)

Clean, readable, correct.
*/


/* 
🧠 What is SameValueZero?

SameValueZero is a comparison algorithm used by JavaScript internally to compare two values.
It is used by:
Array.prototype.includes()
Map
Set
*/

/* 
📌 Definition (Simple)
SameValueZero is almost the same as ===, except it treats NaN as equal to NaN.
*/



/* 
1️⃣ Compare SameValueZero vs ===
Comparison	===	SameValueZero
1 vs 1	true	true
"a" vs "a"	true	true
0 vs -0	true	true
NaN vs NaN	false ❌	true ✅

📌 Only difference = NaN


2️⃣ Example with includes()
let arr = [NaN];

arr.includes(NaN); // true ✅


Because includes() uses SameValueZero.

3️⃣ Example with indexOf()
arr.indexOf(NaN); // -1 ❌

Because indexOf() uses ===, and:
NaN === NaN // false


4️⃣ Why SameValueZero Exists

JavaScript has 3 comparison algorithms:

Algorithm	Used by
==	loose equality
===	strict equality
SameValueZero	includes, Set, Map
SameValue	Object.is()
5️⃣ SameValueZero vs SameValue (Object.is)
Comparison	SameValueZero	Object.is
NaN vs NaN	true	true
0 vs -0	true	false
Object.is(0, -0); // false

6️⃣ Can You Use SameValueZero Directly?

❌ No.
It’s internal, not a JS function.

You use it indirectly via:

includes()

Set

Map

🧠 Memory Trick

=== → strict but hates NaN

SameValueZero → strict + loves NaN

Object.is() → super strict

🎯 Interview One-liner

SameValueZero is an internal JavaScript comparison algorithm used by includes() that is similar to === but considers NaN equal to NaN.
*/


/* 
🔹 What is Object.is()?
Object.is(value1, value2) is a method that determines whether two values are the same value.
It’s similar to === (strict equality), but with a few important differences.

🔹 Key Differences from ===
Comparison	=== Result	Object.is() Result
NaN === NaN	false	true
+0 === -0	true	false
42 === 42	true	true
"hello" === "hello"	true	true
null === null	true	true
✅ Examples
js
console.log(Object.is(NaN, NaN));     // true
console.log(Object.is(+0, -0));       // false
console.log(Object.is(10, 10));       // true
console.log(Object.is("Tarun", "Tarun")); // true
console.log(Object.is({}, {}));       // false (different object references)
🔹 When to use Object.is()
When you need precise equality checks that handle tricky cases like NaN and signed zeros.

Often used internally by methods like Array.prototype.includes() and Map/Set comparisons.

👉 So, you can think of Object.is() as a more accurate equality checker than === for edge cases.

✅ What SameValueZero REALLY is



SameValueZero is:

❌ Not a function

❌ Not an object

❌ Not on any prototype

❌ Not in the global scope

❌ Not inspectable in DevTools
It exists only in the ECMAScript specification as an abstract operation.
*/