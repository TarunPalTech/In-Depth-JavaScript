/* 
③ How JavaScript specs differ from runtime code

This explains:

Why you can’t see SameValueZero

Why prototypes have limits

Why some things are “magic”

1️⃣ What is the JavaScript spec?

The ECMAScript Specification is:

A written document

A rulebook

Not code you run

It describes what JavaScript should do, not how it’s written.

Example from spec (conceptual):

SameValueZero(x, y)
If x is NaN and y is NaN, return true


📌 This is pseudo-code, not JavaScript.

2️⃣ What is JavaScript runtime?

Runtime = actual engine implementation:

V8 (Chrome, Node)

SpiderMonkey (Firefox)

JavaScriptCore (Safari)

They:

Read the spec

Implement behavior in C++ / Rust / C

Optimize aggressively

3️⃣ Spec ≠ Runtime (KEY DIFFERENCE)
Spec	Runtime
Describes behavior	Executes behavior
Abstract operations	Native engine code
Not accessible	Exposed JS APIs
Human-readable	Machine-optimized

👉 Spec logic is not runtime code

4️⃣ Why you can’t access spec algorithms

Spec algorithms:

SameValueZero

ToPrimitive

IsCallable

GetValue

Are:

❌ Not objects

❌ Not functions

❌ Not in memory as JS values

They exist only as instructions.

5️⃣ Why prototypes don’t cross this boundary

You can modify:

Array.prototype


But engines execute:

Builtin_ArrayIncludes(...)


Your JS code never touches this layer.

6️⃣ Why JS exposes some internals (Object.is)

Because:

They are safe

They have stable semantics

They solve real problems

But most internals stay hidden for:

Performance

Security

Engine freedom

7️⃣ Analogy (Very Clear)

Spec = Constitution 📜

Runtime = Government 🏛️

Your code = Citizens 👤

Citizens follow laws, but cannot rewrite the constitution or access government internals.

8️⃣ Real consequence for developers

You should:

Rely on documented APIs

Infer behavior, not hack it

Avoid depending on engine internals

🎯 Interview one-liner

The ECMAScript spec defines abstract operations that describe JavaScript behavior, while runtimes implement them in native code; these internals are not accessible from JavaScript itself.

🧠 Final mental model (VERY IMPORTANT)
Spec (abstract rules)
      ↓
Engine (native implementation)
      ↓
JS APIs (what you can touch)


SameValueZero lives above the API layer.
*/