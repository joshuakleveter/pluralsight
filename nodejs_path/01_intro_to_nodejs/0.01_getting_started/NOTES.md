# Introduction to Node.js - Getting Started

Node.js was first introduced in 2009.

- Node is comprised of 3 parts:
  - libuv (I/O library)
  - V8 (Google's JS engine)
  - Custom JS and C++

NVM (Node Version Manager) is good for version managing Node on UNIX systems.

## Node's Event Loop

Node's event loop is constantly listening for server events.
These can be HTTP, TCP, timers, filesystem, and other events.

It is most likely that the events will interleave each other.

This is what we call a _non-blocking event driven_ approach.

This is very different from the standard approach of multithreading.

Node.js requires you to think in terms of asynchronously written code.

## Conventions

- Callback is always the last param in an async function call.
- error is the first param in the callback.
- It is very common to use anonymous functions as callbacks.

## Notes

You cannot gurantee the order that callbacks will be returned in.

It is possible to create a 'christmas tree' effect when you nest anonymous
callbacks too far.
