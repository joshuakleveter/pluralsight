# Introduction to Node.js - Accessing the Local System

- `process`
- Filesystem
- Buffers
- the `os` module

## The Process Object

Contains an interface to interact with the Node.js process.

Process provides `.stdin`, `.stdout`, and `.stderr` streams for data flow.

`.stdin` is paused by default, so we must resume it to read `.stdin`.

## File System

Most of these are wrappers around the POSIX standard functions, and have
async as well as sync versions.

There are two stream-oriented functions.

There is a `.watch()` function to watch a file for changes.

## Buffers

The Buffer class allows JavaScript to handle raw binary data.

## The 'os' Module

Allows Node.js to interact with with operating system.
