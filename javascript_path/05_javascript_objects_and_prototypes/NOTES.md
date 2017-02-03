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

- [script.js](./get_set.js)

## JavaScript Prototypes and Inheritance

All functions in JS have a prototype.

**Function Prototype:** A function's prototype is the Object instance that
will become the prototype for _all_ objects that are created using said
function as a constructor.

**Object Prototype:** An object's prototype is the object instance from
which said object is inherited.

A prototype is **not** like a class. It _is_ an object.

Functions have a `.prototype` property.
Objects have a `.__proto__` property.

There is _only one instance_ of a prototype object. The constructor function
for the object and all objects instantiated with the constructor function share
the _exact same instance_ of the prototype. Hence, adding a property to a
function's prototype will affect _all_ objects linked to that prototype.

IF an object does not have a requested property JS will check the prototype
for the property.

Functions on objects will behave the same way,
as they are just another property.

Instance properties will always override the prototype properties.

If you change the prototype of a function after creating objects with that
function those objects will remain linked to the old prototype instance.

By default all objects in JS inherit from Object, and Object has no prototype.

### Prototype Chain Creation

Assuming `objA` is the prototype of `objB`:

Call the constructor function of `objA` within the constructor function of
`objB` using `objA.call(this);`. This will ensure the proper initialization
of the prototype object.

Set the prototype of `objB` using `objB.prototype = Object.create(objA);`.
This will prevent us from calling `objA`'s constructor before we should.

Set the constructor of `objB` using `objB.prototype.constructor = objB;`.
If we don't do this `objA` will appear as the constructor.