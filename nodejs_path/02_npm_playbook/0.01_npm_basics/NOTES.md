# NPM Playbook - NPM Basics

NPM is quickly becoming the standard for web package managers.

- A module is a single JavaScript file that provides a functionality
- A package is a collection of modules with a package.json file

- `npm install` allows us to automatically install deps for a package.
- `npm start` is set to a script to start a project.
- `npm test` refers to a script that will run unit tests on the project.
- `npm help`: go to the docs for a npm command

NPM provides an API to be used programatically

NPM's misc. config doc shows most of the shorthand flags that are available.

- `package.json`
  - Track project deps
  - Easy to create quick scripts
  - `npm init` creates a `package.json` file for the project
  - This will autoload any preinstalled deps into the `package.json` file for you.
  - `npm init -y` will create a default `package.json` file.
- `npm set` allows us to set defaults for `npm init`
- `npm get` allows us to see our default settings.
- `npm install` installs a package.
  - we can also use `npm i`
  - pass the `--save` or `-S` flag to save as a dependency.
  - pass the `--save-dev` or `-D` flag to save as a dev dependency.
  - There _is_ an optional dependency section, but it's rarely used.
  - Packages can be installed globally with the `-g` flag.
  - Global packages are used to provide command-line functionality on your own system (e.g. Gulp and Grunt)
- `npm uninstall` uninstalls packages.
- SEMVER: Major.Minor.Patch (0.0.0)
  - Patch: increment with bugfixes or perf improvements
  - Minor: new non-breaking functionality
  - Major: new breaking functionality.
  - You can specify semver numbers in NPM deps.
  - NPM also allows for us to specify semver ranges.
  - Use the `--save-exact` flag to specify an exact dep version.
  - `^`: prefix for latest version of major release
  - `~`: prefix for latest version of minor release
- `npm update`: update deps.
  - `--dev` flag for just dev deps
  - `--prod` flag for just production deps
