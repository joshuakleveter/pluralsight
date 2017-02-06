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

### Module Pattern

The Module pattern is a way of encapsulating a group of like methods.
Think of it like a toolbox. You'll create a "toolbox" of methods.

A module pattern is basically just an object literal with key-value pairs.
The big thing here is that we have private variables.

Generally a Module is only used when you need only one of something.

**The `new` keyword is not used with a Module.**

We use modules to take advantage of closure scope so that we don't
clutter the global scope with unneeded values.

There is a commonly use alternative; the _Revealing Module_.
In this pattern we create all of our methods in the closure scope,
rather than in the return object. We then return references to the methods
that we want to be public in the returned object. Here's an example:

```JavaScript
var repo = function () {
       function get (id) {
            console.log(`Getting task: ${id}`);
            return {
                name: "New task from db."
            };
        }

        function save (task) {
            console.log(`Saving ${task.name} to the database`);
        }

      return {
          get: get,
          save: save
      };
}

module.exports = repo();
```

### Factory Pattern

Factories are used to simplify the creation of an object.

They create different objects based on the exact need.

A simple factory will provide a single API to access multiple types of
similar objects. A common example is if we need to access multiple datasets
with identical APIs. Rather than require and create them individually we can
create all of them through a single Factory object.

The **preferred** way to use a Factory is to auto-load any objects that
the Factory will provide access to and add their APIs to the Factory's scope.
A very common example of this in Node.js development is the
`gulp-load-plugins` package.

See [repoFactory.js](./demo/repoFactory.js) for an example of the preferred
way to build a Factory pattern in JS.

### Singleton Pattern

Use to restrict an object to a single instance across app.

A singleton will remember the instance that you've created. If you request'
that object again it will simply hand the same object back to you.

**Remember:** Node.js uses CommonJS. This makes to creation of singletons
much easier.

**In Node.js** rather than exporting a function we can execute the funtion
in `module.export`. CommonJS will then cache the returned object, effectively
creating a singleton.

## Structural Design Patterns

Concerned with makeup of objects and relationships between objects.

They can extend OR simplify functionality.

### Decorator Pattern

Add new functionality to an existing object without being obtrusive.

- More complete inheritance.
- Wraps an object.
- Protects existing objects.
- Allows extended functionality.

Using this pattern we completely avoid breaking the functionality of
the parent object.

### Facade Pattern

Provide a simplified interface to a complicated subsystem.

It hides the chaotic subsystem from us so we have a simplified interface.

jQuery is the best known example of a facade pattern in real life.

A decorator _adds_ functionality. A facade _cleans up_ messy functionality.

### Flyweight Pattern

Conserve memory by sharing portions of an object between objects.

Our tasks have a lot of non-unique data. This should be shared between tasks.

Share data across objects.

This is very similar to prototypes.

Results in a smaller memory footprint.
Our goal is the smallest memory footprint possible.

**BUT** Only useful if you have a **HUGE** number of objects.
100 to 500 _is not sufficient_.

Flyweights are often used when dealing with massive data sets.

## Behavioral Design Patterns

Assignment of responsibilites between objects
and how they communicate with one another.

Help multiple object cooperate with one another.

Assign a clear heirarchy.

Encapsualte requests.

### Observer Pattern

Allows a collection of objects to watch one object and
be notified of changes when they happen.

Allows for a loose-coupled system.

One object is the focal point;
group of objects watching for changes.

We have the following items in the equation:

- **Observers:** Objects watching the focal point.
- **Subject:** Object decorated with a subject to watch.
- **Notification:** Calback function, etc. sent to the observers on update.

**In summary:** we create a list of observers that need to be notified when
the subject is updated. We then have a function that calls all of the
observers in the list whenever the subject is updated.

### Mediator Pattern

Controls communication between objects to avoid coupling.

Allows for a loosley coupled system.

One object manages all communication.

Many-to-many relationship.

