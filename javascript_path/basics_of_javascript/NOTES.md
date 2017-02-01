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

## Executing programs

JavaScript is a Just-In-Time compiled language. NOT an interpreted lanugage (e.g. Bash)

- **Compiled Language:** Takes _more than one_ pass through the code.
  - First compiles. Checks validity, etc. Like a proofreader.
  - Then runs.
- **Interpreted Language:** Takes only a _single pass_ through the code.
  - A single pass converts and runs code.

## Input and Output

- `alert("Hello World!");` statement
  - This statement is part of the DOM API.
- `console.log("Hello World!");` is more common.
- `prompt()` requests input from the user.

## Operators

- There are sometimes multiple ways to do the same thing.
  - `a = a + 2` and `a += 2`

- Readability is completely subjective.

- Most important operators are:
  - `=` _assignment_ operator.
  - `+ - * /` _math_ operators.
  - Equality operators:
    - `==` - loose-equals
    - `===` - strict-equals
    - `!=` - loose-not-equals
    - `!==` - strict-not-equals

## Values and Types

- `42` is a number; `"42"` is a string.
- Strings can be single or double quoted.
  - Pick one style and do not change! Either is valid.
  - Double quotes are more common.
- In JavaScript we refer to type _coercion_ when changing a value's type.
  - We also have _explicit_ and _implicit_ coercion.
- In JavaScript variables do not have types. Values _do_ have types.

## Code Comments

- Comments are another way to make your code more understandable.
- They are critical!
- Make a practice of writing well-commented code.
- Comments should not say _what_ you are doing. They should say _why_ you are doing it OR _how_ you are doing something.
- Be as verbose as necessary, but no more.

## Variables and Blocks

- Every variable that you use should be formally declared.
  - And it should be declared _before_ you use it!
  - They may be declared in one of the following ways:
    - `var a;` - Function scoped variable.
    - `let a;` - Block scoped variable.
    - `const A;` - Block scoped constant.
    - `function a() {}` - Function declaration.
- Blocks are declared with a pair of curly braces.

## Conditional Statements

- `if ()` statements will always evaluate to a final true or false value.
- Falsy values are:
  - 0
  - -0
  - NaN
  - ''
  - false
  - null
  - undefined
- Anything else is a truthy value.
- Truthy values coerce to `true`, falsy values coerce to `false`.