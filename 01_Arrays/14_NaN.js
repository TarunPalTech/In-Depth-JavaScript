/* 
② Why NaN !== NaN exists

This looks weird at first, but it’s intentional, not a bug.

1️⃣ What is NaN actually?

NaN means Not a Number.

It represents:

Invalid math

Undefined numeric result

0 / 0        // NaN
Math.sqrt(-1) // NaN
Number("abc") // NaN


📌 Important:
NaN is a special numeric value, not an error.

2️⃣ Why JS says NaN !== NaN
Core idea:

NaN represents an unknown or unrepresentable number.

If the value is unknown:

You cannot prove two unknowns are equal

So:

NaN === NaN // false

3️⃣ This is NOT just JavaScript

This behavior comes from IEEE 754, the floating-point standard used by:

JavaScript

Java

Python

C/C++

So in many languages:

NaN != NaN

4️⃣ Logical Analogy (Very Important)

Think of NaN like:

“I don’t know the answer”

Is:

“I don’t know” === “I don’t know” ?

❌ You still don’t know.

So they’re not equal.

5️⃣ Then how do we ever detect NaN?
❌ WRONG
x === NaN

✅ RIGHT
Number.isNaN(x)


Or:

Object.is(x, NaN)

6️⃣ Why Object.is() & SameValueZero break this rule

They exist to solve practical problems:

Collections (Set, includes)

Precise comparison

Real-world usefulness

But language-level equality (===) follows math standards.

7️⃣ Why not change ===?

Because:

Backward compatibility

Breaking trillions of lines of code

Spec stability

So JS added new tools, not changed old ones.

🎯 Interview one-liner

NaN !== NaN because NaN represents an unknown numeric result, and according to IEEE 754 standards, NaN is not equal to any value, including itself.

🧠 Memory Rule

NaN = unknown

Unknown ≠ unknown
*/