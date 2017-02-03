# Quick Start to JavaScript - Vol. 3

## Object-oriented programming

Objects can be declared in 2 ways:

1. As an object literal:

```JavaScript
var friend = {
    name: "Joe",
    age: 20,
    hair: "brown"
};
```

2. With an object constructor:

```JavaScript
function Friend(
    name,
    age,
    hair
) {
    this.name = name;
    this.age = age;
    this.hair = hair;
}

var joe = new Friend("Joe", 20, "brown");
```

- Host objects are defined by the environment.
- Core objects are defined by the JS spec.
- Other objects are defined by the coder.

## This and the Global Object

- In the browser the global object is `Window`
- All the code you write is added as a property or method to the global object.
- Be careful not to override other properties and methods in the global scope!

## Local and Global scope

- Function code can access global variables.
- JavaScript has function based scope.
- When you create a variable inside of a function it is a _local_ variable.