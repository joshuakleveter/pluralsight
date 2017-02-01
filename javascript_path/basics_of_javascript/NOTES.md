# Basics of JavaScript

- Source code is for the coder, not the computer.
- With that in mind our source code should be highly legible and sensible.
- **Make your code understanable with no prior knowledge of the codebase!**
- Syntax and grammar tell us **how** to write valid code.
  - Syntax: valid words/logic to use.
  - Grammar: how to put syntax in correct order.
  - Statement: `a = b * 2;`
    - `2`: A _literal_ value.
    - `b`: A variable.

## Expressions

Example expression:

```JavaScript
a = b * 2 + foo(c * 3);
```

With statement marks:

```JavaScript
(a = (((b) * (2)) + (foo(((c) * (3))))));
[ [a] = [ [[b] * [2]] + [ [foo]( [[c] * [3]] ) ] ] ];
```

- It is often helpful to add additional notation to clarify operator precidence in your program.