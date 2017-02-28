# Introduction to Node.js - Scaling Your Node Application

- Child processes
- Cluster module

## Child Processes

We can use a child process to handle CPU intensive tasks

- `spawn()`
  - Piping of data with shell commands
- `exec()`
  - Shell commands
- `execFile()`
  - Runs a file in the Shell
- `fork()`
  - Special version of `spawn()` for creating Node.js child processes.

With the `spawn()` command we can create multiple shell commands within
the Node.js environment and interact with them throught the streaming interface.

## Cluster

Builds on the child_process `fork()` function.

Allows for the concept of a Master and Workers.

Commonly used to create scalable web servers.
