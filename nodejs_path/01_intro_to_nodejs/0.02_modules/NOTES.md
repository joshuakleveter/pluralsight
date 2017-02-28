# Introduction to Node.js - Modules

- How to include Modules
- Common sources of Modules
- How to publish Modules

Modules that export variables are referenced in camelCase.
Modules that reference constructor functions are referenced with capitalized names.

It is possible to export just a single var name from a module.

Node.js has a large selection of modules that must be imported to use.

You can also import modules from within your project.

We use `module.exports` (an object) to export from a module.

Another source of modules is the NPM registry.

## Publishing Modules to NPM

- Add package.json
- Run `npm add user` to create a user.
- Run `npm publish .` to publish a module to NPM.
