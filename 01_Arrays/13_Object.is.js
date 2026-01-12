/* 
① Object.is() — deep & precise
📌 What it is

Object.is() is a built-in JavaScript method used to compare two values.

Object.is(value1, value2)


➡️ Returns true or false

🧠 Why Object.is() exists

Because === has edge cases that needed a more precise comparison.

1️⃣ Normal comparisons (same as ===)
Object.is(10, 10);       // true
Object.is("a", "a");    // true
Object.is(true, true);  // true


So far, nothing special.

2️⃣ BIG Difference #1 — NaN
❌ With ===
NaN === NaN; // false

✅ With Object.is()
Object.is(NaN, NaN); // true


📌 Reason:
NaN means “Not a Number”, so JS decided it’s never equal to anything, including itself — but Object.is() fixes this.

3️⃣ BIG Difference #2 — 0 and -0
With ===
0 === -0; // true

With Object.is()
Object.is(0, -0); // false


📌 JavaScript internally distinguishes +0 and -0
=== hides this
Object.is() exposes it

4️⃣ Comparison Table (Very Important)
Comparison	===	Object.is()
NaN vs NaN	❌ false	✅ true
0 vs -0	✅ true	❌ false
Others	same	same
5️⃣ Relation to SameValueZero (Key Insight)
Algorithm	Used by	NaN	0 / -0
===	language	❌	same
SameValueZero	includes, Set	✅	same
Object.is	direct use	✅	different

👉 Object.is() uses SameValue, not SameValueZero.

6️⃣ When should YOU use Object.is()?

Library / framework code

Edge-case comparisons

Polyfills

Deep JS understanding

❌ Not needed for day-to-day app logic

🎯 Interview one-liner

Object.is() is similar to strict equality but correctly compares NaN and distinguishes between +0 and -0.

🧠 Memory Trick

=== → practical

includes() → SameValueZero

Object.is() → most precise
 */


/* 
Under SameValueZero:

NaN is considered equal to NaN ✅

+0 and -0 are considered equal ✅
*/