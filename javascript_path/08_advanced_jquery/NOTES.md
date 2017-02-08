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

## Event Handling

jQuery provides us a number of shorthand event handler methods.

Use the `.click()` handler to handle click events.

Make sure that your document is ready before trying to attach event handlers
to elements. It is a common error to try and append an event handler to an
element that has not yet been loaded.

Use jQuery's `.extend()` method for easier setting of default parameters.

Make sure to view the use of an app/page from a new user's perspective.

When using jQuery method chaining is a best practice for binding multiple
event handlers to a single element.

Chaining is not affected by the return value of any functions in the chain.

Per W3C event handlers are not supposed to return a value.

Returning a `false` value _should_ prevent behavoir related to that event.
Keep in mind that this will not work in all browsers! Note that jQuery
can handle all of this for us.

Unhandled events are bubbled up the DOM and, if it reaches the global object
without an event handler, will be ignored.

The usual way to prevent default events with with the
`event.preventDefault()` function.

**NOTE:** `event.preventDefault()` does NOT stop the event. It DOES prevent
the event from performing the default behavoir. The event will still be
bubbled up the DOM.

To stop event propogation (bubbling) we can use the
`event.stopPropogation()` function.

You can use multiple event handlers _of the same type_ on an element.

If you need to halt processing of an event immediatly use the
`event.stopImmediatePropogation()`.

Behind the shorthand event handler methods in jQuery there is a set of
basic event handler methods.  These are:

- `.on()`
- `.off()`
- `.one()`

Old versions of jQuery used the following methods. These have been superceded
by the above listed methods:

- `.bind()`
- `.unbind()`
- `.live()`
- `.die()`
- `.delegate()`
- `.undelegate()`
