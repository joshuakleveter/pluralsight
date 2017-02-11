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

## Advanced Event Handling

All jQuery event handler shorthand methods can be replaced with the
`.on()` method. The first param is the event type that you want to handle.

One of the biggest advantages of the `.on()` method is that you can
specify multiple event handlers in a single method call.

So instead of this:

```JavaScript
$('#button')
    .click(function(event) {
        // handle click
    })
    .dblclick(function(event) {
        // handle doubleclick
    });
```

We can do this:

```JavaScript
$('#button)
    .on('click dblclick', function(event) {
        // handle click and/or doubleclick
    });
```

This makes our code much easier to maintain and read.

Within the `.on()` method you can use the `event.type` property to check for
specific event types.

**Important:** With a dynaically-loaded script event handlers will be attached
every time you run the script. As an example; if you refresh the page you will
attach _another_ event handler and cause the event to fire twice, etc. We can
prevent this with the use of the `.off()` method.

Usually the `.off()` method is the first method called in the event handler
chain.

Called without params it will remove _all_ event handlers from the
object and give you a clean slate to work with.
**Make sure that this is what you intend to do before you do it!**

Usually we would specify exactly which handlers we want to remove rather
than removing allof them.

Using named functions in your event handler callbacks allows you to update
or remove a specific handler rather than changing _all_ handlers associated
with a specific trigger.

**In summary:** used named functions wherever possible.

Be very careful of which order you load event handlers so that you don't
accidentally trigger an event without the expected result of the event.

### Event Namespaces

Use of event namespaces makes it much easier to handle the addition and removal
of events in the correct order.

Syntax is as follows:

```JavaScript
// Normally we would attach an event like such:
$('#button')
    .on('click', function(event) {
        // handle event
    });

// Using a namespace looks like this:
$('#button')
    .on('click.namespace', function(event) {
        // handle event
    });
```

Event namespaces are non-hierarchical.

We can remove _all_ event handlers for a namespace by just passing the
namespace name to the `.off()` method.

You can use as many namespaces as you like

### Event Delegation

Traditionally devs have used the `.bind()` method to attach event handler copies
to other DOM elements. This is non-ideal.

Using the `.on()` method is far more efficient.

To use event delegation with the `.on()` method we pass an optional
second selector param:

```JavaScript
$('ul')
    .on('click', 'li', function(event) {
        // handle event
    });
```

In this example any clicks on an `<li>` element will bubble up and be handled
by the `<ul>` element.

Delegated event handlers can process events triggered by elements that
are dynamically added (e.g. AJAX) at a later time.

Target elements that are deep in the DOM can cause a perceptible delay
in the processing of the event.

### Custom Events

We can create custom event handlers to handle almost any interaction that
the user can have with the browser.

Use the `.trigger()` method to initiate a custom event.

We can use the `event.data` property provided by jQuery to persist data across
event triggers and pass data into event handlers.

Custom events have all the same capabilities as standard events.

We can create custom events on DOM elements or objects that are stored
in memory.

### Event Parameters

We can pass data to event handlers in either the `.trigger()` or `.on()`
methods. In both cases the data must be an array or object.

We can use this to set the nodeName value for a custom event.

Objects are passed to functions by reference, not value.
If you pass on object to a function the function will just get a pointer to
the object so it can access the values in that object.

## jQuery Deferred Objects

