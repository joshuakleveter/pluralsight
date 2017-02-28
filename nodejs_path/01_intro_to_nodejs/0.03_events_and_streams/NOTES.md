# Introduction to Node.js - Events and Streams

- Callbacks vs. Events
- EventEmitter
- EventEmitter Patterns
- Readable and Writable Streams
- Piping Streams

Non-blocking doesn't always mean callbacks.

With Events we are implementing an Observer pattern.

Events are just strings and can be of any value.

## Streams

- Streams extend the EventEmitter with an agreed upon interface.
- Streams are either ReadableStream or WritableStream.
- Readable streams are pipeable to writable streams.

We can use the `.pipe()` function to pipe data between streams like
we would use the `|` operator in UNIX.

Pipes can be chained.
