# JavaScript Objects and Prototypes

## Creating JS Objects

We can create objects with any of the following:

- _Object Literal_
- _Constructor Function_
- _Object.create()_

The `class` syntax in ES6 does not create true classes like
a statically-typed language.

The `this` keyword refers to whatever Object is executing
the current code.

The `new` keyword sets the context of `this` to a new empty object.

_Constructor Functions_ are a common pattern for creating
multiple instances of similar objects in JS.

`class` syntax is just syntactic sugar.

## JS Object Properties

You can access object properties with either dot or bracket notation:

```JavaScript
var myObj = {
    color: "green"
};

myObj.color // "green"
myObj["color"] // "green"
```

Bracket notation _can_ be used to auto-generate property names
and create property names that are not valid identifiers.

### Writable, Enumerable, and Configurable

Every object property has `writable`, `enumerable`, and `configurable` attrs.

The `writable` attr controls if the initial property value can be changed.

IF a non-writable property contains an object you can still change properties
of the contained object by default. You'll need to use `Object.freeze()` to
prevent those properties from being changed.

The `enumerable` attr controls if the property will appear in a `for..in` loop.

Non-enumerable will also prevent it from:

- Appearing in `Object.keys`
- Being serialized with `JSON.Stringify()`

The `configurable` attr prevents property configuration from chaging.
It also prevents the property from being deleted.

Non-configurable properties _cannot_ be made configurable again.

However, you _can_ change the `writable` attr on a non-configurable property.

### Getters and Setters

These are used to control return values.

Getters and setters must be declared using `Object.defineProperty()`

Getters and setters allow you to use a function to conrol access
to an object property.

Here's an example of using a get/set pair to control naming of an object:

- [script.js](./script.js)