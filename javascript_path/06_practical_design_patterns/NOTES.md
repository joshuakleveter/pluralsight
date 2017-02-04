# Practical Design Patterns in JavaScript

## What is a Design Pattern

Objects work differently in JS than other OOP languages (like Java and C#).

We should always think about design patterns based on the problem.
What problem are we trying to solve and which design pattern presents the
best solution?

Design patterns are a specific solution for a specific problem.

Software design patterns were originally coined in the book
_Design Patterns: Elements of Reusable Object-Oriented Software_.
It is most often referred to as _The Gang of Four Book_.

Always think in the order of **problem** -> **pattern**.
Not the other way around!

- A design pattern:
  - Solves a common problem.
  - Is a proven concept.
  - The solution is not obvious.
  - It describes a relationship 9 times of 10.
  - It has a significant human component.

### Why Use Patterns

- Why solve the problem again?
- It gives us a common vocabulary.

### Types of Patterns

Creational:

- For creating new instances of an Object

1. Constructor
2. Module: group of related objects.
3. Factory
4. Singleton

Structural:

- Makeup of objects themselves

1. Decorator
2. Facade
3. Flyweight

Behavioral:

- How objects relate to one another and operate

1. Command
2. Mediator
3. Observer

## Creational Design Patterns

These are used to create new objects.

There are different patterns depending on the problem you need to solve.

### Constructor Pattern

Used to create objects with their own object scope.
Traditionally creating a new instance of a class.

We use the `new` keyword.

- The `new` keyword in front of a function makes it a constructor
  - Creates a new object.
  - Links to an object prototype
  - Binds `this` to the new object scope.
  - Implicitly returns `this`

The constructor pattern looks like this:

```JavaScript
function ObjectName (param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function () {
    return `${this.param1} ${this.param2}`;
  }
}
```

See [task.js](./task.js) for an in-depth example.

With the above example we re-create the `toString()` method for each object.
Use prototypes instead.

We create an object and then make copies of it.

Using closure scope to access properties.

Each object should be created in it's own file.