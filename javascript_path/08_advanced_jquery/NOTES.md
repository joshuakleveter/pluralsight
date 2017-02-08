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

### Stub Functions

A common way to extend functions is with a _function stub_.

A stub should only be one line of code that calls the new function with
previous default params hard-coded.

Stub functions should only be used in a stop-gap situation. If you have
time there are much better routes.

Adding stubs dramatically increases the need for internal documentations.

### Default Values

JavaScript does not enforce param count.

Omitted params will default to `undefined`.

Use of an excessive number of default params will inevitably lead to
overly-complex function calls.

### Object Parameters

Use one object to handle all parameters in a function.

Object based params are the most extendable and most legible type
of function paramters.

You can add new object parameters without breaking legacy code.

Expose default parameters as an object. This allows us to easily change
default values without breaking leagcy code.
