'use strict';

var Repo = require("./taskRepository");

/**
 * Example of the Constructor pattern
 */

// First we create the constructor function.
var Task = function (data) {
    this.name = data.name;
    this.completed = false;
}

// Next we'll add properties to the object prototype
Task.prototype.complete = function () {
    this.completed = true;
    console.log(`Task completed: ${this.name}`);
}

Task.prototype.save = function () {
    console.log(`Saving task: ${this.name}`);
    Repo.save(this);
}

// Then we can export the object for use in our Node.js app
module.exports = Task;
