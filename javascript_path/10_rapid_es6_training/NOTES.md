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

## Modules and Classes

- Module Basics
- Named Exports
- Classes
- `extends` and `super`
- Constructor function properties
- Static Members
- `new.target`

You'll need to use a transpiler and module loader to use ES6 modules at this
time. Browsers don't support then yet.

### Module Basics

Loading a module will execute it, but only once on the initial load.

Loading a module will automatically enable strict mode in the module.

Use `import` and `export` commands for module communication.

We can export and import as many values as we like.

Using `import { .. } as ..` allows us to create an alias.

`import` statements are hoisted and the modules are immediatley executed.

Using `import` w/o curly braces will import the default export.

If you attempt to import a non-existent default you will get `undefined`.

`import *` will import all exports.

### Named Exports

Named exports are _read only_.

Properties of an exported object, however, are writable.

Modules are live-linked and their internal properties can be edited
at runtime.

In summary: we are only exporting names, not the actual values / functions.
This means that if the contained value is updated we will have access
to the updated value.

### Classes

These are just a wrapper around standard constructor calls.

The `class` itself is a function, and calling `new` on it returns
an object.

Classes can have a constructor method that is automatically called
with the `new` keyword.

Using variable declarations in a class will throw a syntax error.

Classes are not hoisted.

You can create a 'class expression'.

Classes cannot be called with the `.call()` function.

Constructor functions are globally spaced, classes are not.

### extends and super

`extends` will create a [[Prototype]] link to the parent class and
delegate calls to that parent.

`super()` will call the parent classes' functions.

Using the `constructor()` method on an extended class requires the use
of `super()`

Classes do allow for polymorphism.

`super` is allowed in an object literal.

### Properties for Class Instances

A classes' constructor() method is the equvalent of an ES5 constructor func.

Use the `this` keyword to declare class properties, just like ES5.

### Static Members

Use the `static` keyword to declare static members of a class.

These are accessable without instantiation.  However, static methods are
not available on the instances of that class.

### new.target

`new.target` points directly to the constructor() method that was initially
called, not parent classes.

If we don't define a constructor() on a subclass JS will automatically
create a constructor() for us.

`new.target` allows us to access static methods in the constructor() method.

## New Types and Object Extensions

- Symbols
- Well-known Symbols
- Object Extensions
- String Extensions
- Number Extensions
- Math Extensions
- RegExp Extensions
- Function Extensions

### Symbols

Symbols are a unique ID. However, we have no access to that ID as
a developer.

Symbols are a new type.

We can give a symbol a human-readable string to identify the symbol
in development.

We have a built-in symbol registry that we can access with `Symbol.for()`

`Symbol.keyFor()` returns the debug string of a symbol.

Symbols can be used as unique property names on objects.

Using a symbol as a property name makes it non-available to
`Object.getOwnPropertyNames()`.

### Well-Known Symbols

Symbol.toStringTag allows us to set the return a specific string from
an object's .toString method.

Symbol.isConcatSpreadable can be set to false to prevent spreading
an array with concat.

Well-known symbols act as meta-programming controllers to set various
options as to how built-in functions will be treated.

### Object

- `Object.setPrototypeOf()`: set a prototype chain for an Object.
- `Object.assign()`: Populate a target object with the other params.
  - Later params override eariler ones.
  - Properties must be enumberable.
  - The prototype chain is not walked.
- `Object.is()`: Alternate for `===`
  - NaN === NaN with this methods.
  - 0 === -0, but Object.is returns false.
- `Object.getOwnPropertySymbols()`: See symbol properties of an Object.

### String

- `.startsWith()`: check the prefix of a string.
- `.endsWith()`: check the suffix of a string.
- `.includes()`: check for a substring within a string.
- `\u{}`: new Unicode syntax.
  - the `.length` property of a unicode symbol is inaccurate.
  - Use `Array.from().length` instead.
- `.normalize()`: Fix the length of a string with unicode accents.
  - Convert unicode values to ASCII
- `.fromCodePoint()`: see the unicode value of a point.
- `String.raw()`: Don't process escape chars.
- `.repeat()`: Repeat a string instance.

### Number

- `Number.parseInt()`: use instead of `parseInt()`.
- `Number.parseFloat()`: use instead of `parseFloat()`
- `Number.isNaN()`: use instead of global `isNaN()`
- `Number.isFinite()`: use instead of global `isFinite()`
- `Number.isInteger()`: check for floats and other non-ints.
- `Number.isSafeInteger()`: Check for floats that are safe integers.
- `Number.EPSILON`, `Number.MAX_SAFE_INTEGER`, and `Number.MIN_SAFE_INTEGER`
  - New constants on the Number object.

### Math

- New hyperbolic functions.
- New arithmatic functions.
- New misc. functions.

- `Math.sign()`: Binary signing of numbers.
- `Math.cbrt()`: cubic roots.
- `Math.trunc()`: Truncate float to a decimal.

### RegExp

- Supports astoral-plane unicode with the `/u` flag.
- New `/y` flag to search from the last index, and last index _only_.
- `.flags` property to see what flags were set. ALways returns 'gimuy' order.

### Functions

- New `.name` property: Get name of the function.
  - Anonymous functions take the variable name as the `.name` property.
  - Classes return thier own name, and class methods return their own name.
  - This is non-writable.
  - Use `Object.defineProperty()`

## Iterators, Generators, and Promises

### Iterators

Arrays now have a `myArr[Symbol.iterator]` property.

The iterator is a function.

Iterators have a `.next()` function to advance the iterator.
`.next()` returns an object with two properties: `done` and `value`.

We can declare our own iterators if we like using `Symbol.iterator`.

You can use a `for ... of` loop to consume a custom iterator.

Spread operators also work off of an iterator.

### Generators

A function that does not necessarily run to completion.

Syntax: `function* funcName() { .. }`

Calling a generator will return an iterator. We then run the function
body with the iterator.

Generators can be controlled by a `for ... of` loop.

### Yielding in Generators

`yield` does not need to return a value.

We can also use `yield` to input data into the generator.

`yield` has a low precidence.

`yield*` takes another iterable and hands control from the generator to that
iterable. Once that iterable is consumed it returns back to the main generator.

We can use `.throw()` on an iterator to throw errors.
Make sure that you have a try/catch block if you're using this.

Use `.return()` for generator cleanup.

### Promises

An object that is waiting for an async process to complete.

The Promise has built-in resolve and reject handlers.

Use `.then()` to handle promise completion.

You can chain `.then()` calls.

We can use `.catch()` to handle rejected Promises.

If we return a Promise from another Promise our `.then()` call get handle
the _returned_ Promise.

`Promise.resolve` will auto-resolve.

`Promise.reject` will auto-reject.

`Promise.all()` will wait for _all_ passed Promises to complete.  If even one
of those Promises rejects we will return a rejected Promise.

`Promise.race()` will resolve/reject on the first Promise to complete without
waiting for the other Promises to complete.

## Arrays and Collections

- There are a number of Array extensions in ES6.
- We have new ArrayBuffers and TypedArrays.
- We now have DataView objects and Endianness.
- Maps and WeakMaps have been added.
- Sets and WeakSets have been added.
- Array subclassing is now allowed.

### Array Extensions

In ES5 if we pass the Array() constructor a single numeric value we will
get an array of that length filled with undefined values.
ES6 adds `Array.of()` to fix this.

`Array.from()` creates a new array from an iterable, manipulated by
a function.

`.fill()`: replace the values in an array with a new value.
A second parameter allows for a start index, and the third is for a stop index.

`.find()`: Returns the first value matching a search function.

`.findIndex()`: Same as `.find()`, but returns the index.

`.copyWithin()`: Copy data within an array.

`.entries()`: Get index / value pairs of an array.

`.keys()`: Get index values of an array.

`.values()`: Get values of an array.

### ArrayBuffers and Typed Arrays

ArrayBuffers are arrays of bytes.

Typed Arrays exist on top of ArrayBuffers and allow us to interface with them.

### DataView and Endianness

Big Endian or Little Endian

A DataView allows us to control a buffer.

DataViews can be set to a subsection of a buffer.

DataViews default to Big Endian mode.

### Map and WeakMap

We've already been using Objects as maps in JavaScript.

WeakMaps will allow for automatic garbage collection within the WeakMap.

We can use Objects as keys in Maps and WeakMaps.

- `.set()` add value to a Map.
- `.delete()` remove a value
- `.clear()` remove all data from Map.
- `new Map()` use an iterable to create a Map.

We cannot access size on a WeakMap.

### Set and WeakSet

Similar to Maps, but with no keys.

Think of it as an array of unique values, like an enum.

We _can_ pass two 'identical' object literals into a set and store both.

WeakSet requires objects, not primitives.

### Subclassing

Transpilers do not support subclassing.

Using class syntax we can extend built-in Objects

This allows us to add new properties and methods to built-in Objects.

## The Reflect API

- Object Construction
- Method Calls
- Prototypes
- Properties
- Property Extensions

Allows for use with DSL (Domain-Specific Language)

### Object Construction and Method Calls

Reflect is an Object. Like Math.

- `Reflect.construct()`: Instantiate a class
  - This allows us to set `new.target`
- `Reflect.apply()`: Call a function.
  - Allows for `this` binding.
  - Allows for calling non-instantiated classes via prototype.
  - Takes an arg array.

### Reflect and Prototypes

- `Reflect.getPrototypeOf()`: get prototype of object/class.
- `Reflect.setPrototypeOf()`: set a prototype.

### Reflect and Properties

- `Reflect.get()`: get a property value.
  - Works with getter functions.
  - Allows for `this` binding.
- `Reflect.set()`: set a property value.
  - Works with setters.
  - Allows for `this` binding.
- `Reflect.has()`: check for property existence.
- `Reflect.ownKeys()`: Get property keys from Object.
- `Reflect.defineProperty()`: Define a property on a class.
- `Reflect.deleteProperty()`: Delete a property.
- `Reflect.getOwnPropertyDescriptor()`: Full descriptor object of a property.

### Reflect and Property Extensions

- `Reflect.preventExtensions()`: Prevent extensions to objects.
- `Reflect.isExtensible()`: Check if we can extend an object.
