# Advanced JavaScript

## Introduction

Concatenation is the worst thing that you can possibly do in HTTP/2.

CSS templating engine?

- Read these:
  - High Performance JavaScript
  - JavaScript Patterns

- Resources:
  - Mozilla JS Docs
  - Idiomatic.js
  - ECMAScript Spec
  - ECMAScript Proposals

This course will cover the 'advanced basics'.
The goal is to force you to learn the language.

## Scope

Scope: where to look for things

- Where are we looking?
- Who's looking?

JavaScript is thought to be a dynaminc language. It is not.
It it a compiled language.  This is accomplished with a JIT compiler.

A compiler will make _at least_ two passes through the code.

JavaScript, by default, has function scope as a base unit.

JavaScript thinks of a variable declaration as _two_ statements.
A declaration (`var a;`) and an assignment (`a = 'foo';`).

Function parameters are treated as if they were `var` statements.

All `var` declarations will be handled at compiler time. There is not
a concept of creating a new variable at runtime.

All scopes in JS are nested inside one another.

An undeclared LHS reference in _non-strict mode_ will result in a new
global variable.

Undeclared != `undefined`

`undefined` is roughly the same as "uninitialized"

`undefined` is a proper type in JS.

What would happen if:

```JavaScript
function baz(foo) {
  var foo = 'bam';
}
```

The second `var` declaration would be ignored. _But_ would still override the value of the
`foo` param.

References are RHS when they are _not_ LHS references.

- LHS refs set the value of a container
- RHS refs get the value of a container

**Shadowing:** You will always return the variable that is closest in scope
to where you are using it.

Make sure that you're always using strict mode.
Always, always use `"strict mode"`!!!

JS _does not require_ arguments to match parameters.

RHS references to undeclared vars will throw a `ReferenceError`.

In summary:

- Non-strict mode:
  - LHS refs to undeclared vars will result in a new global var.
  - RHS refs to undeclared vars will throw a `ReferenceError`
- Strict mode:
  - LHS & RHS refs to undelcared vars will throw a `ReferenceError`.

Dynamic scope:

For the most part modern languages don't use this model.
Bash scripting uses it, there's an opt-in Perl mode, and a few obscure
academic languages.

Lexical scope is like moving up the floors of a building until you find
what you're looking for. You stop on the floor you find what you're searching
for and go no further.

Lexical scope is an author-time decision that won't change.

There are ways to cheat on lexical scope (**DON'T DO THIS**):

- `eval()`
  - just by virtue of the presence of this method it will make your code slower.
  - There are a _very few_ niche cases that this _can_ be used.
  - If you have to ask _if_ you should use this then _don't_.
- `with ()`
  - `with ()` will leak global vars just like a LHS ref.
  - Creates a _whole new_ lexical scope _at runtime_.
  - Completely disallowed in strict mode.

We can hide code in a new lex scope with the IIFE pattern.
These _can_ be named functions.

IIFEs should be named to avoid anonymous stack traces.

You can pass the global object into your IIFE and alias it to `global`.
This helps with code legibility.

No need to worry about `undefined == true` as the problem is fixed in
strict mode.

`let` in ES6 will give us block scope. This is implicit hijacking of the
current block.

`var i = 0` in a `for () { .. }` loop will attach `i` to the surrounding scope.
Whereas `let i = 0` will attach `i` to the loop itself.
This can apply to any code block (like `if` statements, etc.).

This is debated, but we should really use both `var` and `let`.

Problems with `let`:

- Doesn't hoist.
- Makes code more complicated.
- Harder to maintain as it's implicit.
- Let blocks were suggested to TC39, but rejected.

TC39 suggests immediate use of ES6 syntax with a transpiler.

Dynamic scope works based on call-site rather than declaration-site.

Dynamic scope is runtime decision. Lexical scope is author-time.

`undefined` is an empty variable.

"Hoisting" is a mental concept, not part of the spec.

Conceptually functions and vars are "hoisted" to the top of the containing
scope. This happens because the functions and vars are declared during
compile time. However, they are undefined as the value assignments are not
hoisted.

Duplicate functions are overridden.

**Mutual Recursion:** two functions mutually calling each other.
This only works in a language with hoisting.

Header files in C are a form of manual hoisting.

The `this` keyword gives us some ability to create dynamic scope.

There are 4 rules for creating the `this` binding:

1. Default binding (4th in precidence).
    - IF you're in strict mode `this` defaults to `undefined`
    - IF not in strict mode `this` defaults to the global.
    - This depends on the strict mode of the surrounding function.
    - Looks like: `foo();`
2. Implicit binding (3rd precidence)
    - When there is an object property reference the object becomes `this`
    - Looks like: `obj.foo();`
3. Explicit binding (2nd precidence)
    - Using `.call()` or `.apply()`
    - Both of these methods allow for passing a `this` argument.
    - We also have hard binding with the `.bind()` keyword
4. `new` binding (1st precidence)
    - This is a constructor call.
    - `new` is able to override hard bindings.
    1. Creates a new empty object.
    2. Linked to another object.
    3. New empty object is bound as `this`.
    4. IF it does not explicitly return anything it will return `this`.

`new` turns a function call into a constructor call. This has nothing to do
with a constructor function.

It is impossible to create a crossover between lexical scope and `this` binding.
