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