# Advanced Techniques in JavaScript and jQuery

## Traditional JavaScript Functions

Declaring functions in the global scope is a bad idea.
You run the risk of override by a third party.

Declare functions as follows:

```JavaScript
var myFunction = function () { .. }
```

The above example will keep the function scope to the containing code block.

An even better option is to create your own global object and attach
all of you functions and code to that object. This is how we do
namespacing in JavaScript.  Your namespace is then placed in the
global scope for easy access.

**USE NAMESPACES.**

Using `function myFunc () { .. }` syntax to declare functions is a bad
idea as the function will be added to the global scope. Only use of
the `var` keyword will keep your scope in order.
