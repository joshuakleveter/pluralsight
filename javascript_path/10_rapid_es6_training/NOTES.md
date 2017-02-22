# Rapid ES6 Training

By Mark Zamoyta

- ES6 is offically known as ES2015.

## Introduction

- What are the new features?
  - Fully back-compatible
  - New syntax
  - Modules and Classes
  - Object extenstions
  - New types
  - Iterators
  - Generators
  - Promises
  - Arrays and Collections
  - Reflect and Proxy APIs

In ES6 we should move away from the use of global functions and start using
the namespaces counterparts.

[ECMAScript Compatibility Table](https://kangax.github.io/compat-table/es6)

To support older browsers and runtimes we need to use transpilers.
(e.g. Babel, Traceur)

Note that Modules have been separated from the main ES6 spec. As such, most
browsers and runtimes don't yet support them.

## New Syntax

1. `let` and `const`
2. Arrow functions.
3. Default function params
4. Rest and spread.
5. Object literal extensions.
6. `for..of` loops
7. Octal and binary literals.
8. Template literals.
9. Destructuring.

### Let, Const, and Block Scoping

`let` allows us to declare a variable w/o hoisting and with block scoping.

`const` is for declaring constant values.

`let` is bound to the containing block scope. NOT the containing function scope.

It is preferred to use `let` with `for` loops.

Use uppercase names for `const` values.

`const` _must_ be initialized. Uninitialized `const` values with throw a
`SyntaxError`.

`const` is block-scoped and can be shadowed.

### Arrow Functions

`() => { .. };`

Shorthand syntax for functions, _kind of_.

When you have _only one_ arg you can leave off the parameter parens.

More complex arrow functions with a function block will need the
`return` keyword.

The main use of arrow functions is for `this` bindings.

Arrow functions will implicitly bind `this` to the context scope, _not_,
for example, the element selected in an event handler.

You cannot use `call`, `apply`, or `bind` with an arrow function.

Arrow functions are whitespace-sensitive.

Arrow functions _do not_ have the `.prototype` property

### Default Parameters

`function myFunc(foo = 42) { .. }`

We can declare overridable default params in ES6 functions.

IF you specify `undefined` it will be overriden by the default value.

Defaults have access to the other params and variables.

The `arguments` array does not have access to default values.

### Rest and Spread

Rest: `...myArray`

`function myFunc(arg1, ...arg2) { .. }`

This allows us to gather all remaining arguments and pass into a single array.

Spread is the opposite of Rest.

Syntax is the same: `...myArray`

Rather than gathering a group of arguments into an array it will separate
an array into individual values for use as arguments.

Spread can split a string for us.

### Object Literal Extensions

We can now pass variables directly into object literals. Like so:

```javascript
var price = 9.99;
var count = 10;

var myObj = {
  price,
  count
};
```

There's no longer a need to declare a name and value pair.

We can use a shorthand to declare functions in Object literals.
_BUT_ it does affect your `this` binding in the same way as an arrow function.

We can also dynamically name object properties with square brackets.

Dynamic names will work with getters and setters.

### for...of loops

Allows us to loop through any iterable.
(Arrays, Strings, etc.).

### Octals and Binary literals

Octal Syntax: `0o10` (=== 10)

Octals are prepended with `0o`

Binary values are prepended with `0b`

### Template Literals

Strings with interpolation!

Use the backtick character rather than quotes.

Interpolated values look like this: `${myVar}`

``Hello ${name}!``

Newlines are maintained in template literals

We can pass expressions into interpolated values.

Tagged template literals allow us to process a template literal with a
custom function.

The function attached to a tagged template literal will recieve the following:

1. An array with the unique string values in the template literal
2. An argument list of the interpolated values from the template.

### Destructuring

Allows dissasembly of objects, arrays, strings, etc.

```javascript
var myArr = [1, 2, 3, 4, 5];
var [a, b, c, d, e] = myArr;

console.log(c); // 3
```

We can skip elements in a destructuring statement

We can also split an array by using a Rest parameter.

We can use default values in destructuring

We can destructure nested values.

Destructuring works in function calls and function parameters.

When destructuring objects use curly braces.

When destructuring objects into variables that have already been declared
we need to surround the statement in parens.

### Advanced Destructuring

Destructuring requires an iterator.

Trailing commas are allowed.
