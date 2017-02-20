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

## Closure

Closure is a mathematical concept from lambda calculus.

**Closure:** When a function remembers and accesses it's lexical scope _even_
when it's executed well outside of it's lexical scope.

Note that this is _not_ a snapshot of the scope, but a _live link_ back
to the function's lexical scope.

Closure is possible because of 1st class functions in JS.

As long as there is at least one function with a closure over a scope that
scope will not be garbage collected.

The entire scope, no matter how nested and deep, is maintained.

Example:

Often people will expect the below example to print 1 through 5 in order.
However, it will actually print out 6 five times in a row as each of the five
anonymous callbacks that have been created will close over the same
global scope.

```javascript
for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log("i: " + i);
    }, i * 1000);
}
```

Instead we should use an IIFE to create a new scope and `i` variable for each
callback that will store the correct values for us. Like so:

```javascript
for (var i = 1; i <= 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log("i: " + i);
        }, i * 1000);
    })();
}
```

In that example the callbacks maintain a closure over the IIFE and will log
the correct numbers for us, as each IIFE is passed a new number value in the
correct order.

Using `let` in a `for` loop: We may think that `let` is bound to the loop.
This is not quite true. The `let` not only binds to the loop, but _rebinds_
`let` for each iteration of the loop. Like using an additional `j` variable
within the loop.

An object reference passed out of a function and later accessed
_is not closure_. Closure only occurs with functions transported out of a scope.

The most common closure-based pattern in JS is the _classic module pattern_.

1. There must be an outer wrapping function that is executed to create module
2. One or more returned functions that have closure over inner scope.

Most often we return an object with pointers to the inner functions as
our public API.

Encapsulation and hiding what doesn't need to be public.
This is an application of the Principle of Least Privledge.

There is a variant known as the _Modified Module Pattern_ where we name
the returned object something like _publicAPI_. This allows us runtime
access to modify the public API of the module if necessary.

RequireJS, AMD, and other module loaders use what we call the
_Modern Module Pattern_.  This hides away some of the implementation details.

ES6 adds first-class support for modules with a file-based system.
This utilizes `export` and `import` syntax.

**Unit Testing:** testing the smallest indivisible section of code.
This means that we're _not_ testing hidden implementation details.

## Object Orienting

- Common Patterns
- Prototypes
- "Inheritance" vs. "Delegation"

This section is _significantly divergant_ from the mindset of the JS community
at large. Keep this in mind.

### Prototypes

Every object in JS is built by a Constructor Call.

C++ and Java _should_ be known as _class-oriented_ langs.

JavaScript and Lua are the only languages currently in existence that
allow you to create an object without a class.

JavaScript _does not_ create objects _based on_ the prototype.
It creates an object that is _linked to_ the prototype.

`.constructor` is an arbitrary word. Does not mean "constructed by".

`new` keyword:

1. Create a new anonymous object.
2. Link it to the `.prototype` with [[Prototype]]
3. Bind `this` to the anonymous object.
4. Return `this` from the function call.

Prototyping is very similar to the lexical scope model.

[[Prototype]] is a hidden linkage that allows us to traverse the
prototype chain.

Use of the `new` keyword _does not_ create a `.constructor` property.
In most cases the prototype chain traversal will happen to find the correct
`.constructor` property.  _This is not behavior that we can rely on._

`.__proto__`: pronunced "dunder-proto".

`.__proto__` is a getter function. It returns the internal prototype linkage
of the `this` binding.  In other words: [[Prototype]] is the private, internal
prototype link. `.__proto__` is the public property.

**NOTE:** `.__proto__` is a non-standard property. It does not exist in oldIE.
ES6 _finally_ standardized it, and IE11 has it.

ES5, rather than `.__proto__`, has `Object.getPrototypeOf()`. This works in IE9.

In extreme cases we may have to use `.constructor.prototype`. However these are
writable properties and are generally unreliable.

We can shadow properties on the prototype chain. Note that this will prevent
us from accessing properties of the same name that are up to prototype chain.

A better syntax in the JavaScript world is to use different method names.

You're generally better off avoiding property shadowing.
Use delegation to your advantage.

Don't pretend that JS has classes. It doesn't.

`Object.prototype` is the prototype equivalent of the global object in lexical.

`Object.create()` does the first 2 steps of the `new` keyword.

`Object.create()` will throw away your `.constructor()` property and result in
some odd behavior. To correctly reset the .constructor` property we would have
to use the `Object.define()` method. But _there is a better way_.
