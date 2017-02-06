'use strict';

var Repos = require("./repoFactory");

/**
 * Constructor for Task objects.
 * 
 * @param {Object} data Object with a 'name' value for the name of the task.
 */
var Task = function (data) {
    this.name = data.name;
    this.completed = false;
}

/**
 * Call this to complete the task.
 */
Task.prototype.complete = function () {
    this.completed = true;
    console.log(`Task completed: ${this.name}`);
}

/**
 * Call this to save the task to the database.
 */
Task.prototype.save = function () {
    console.log(`Saving task: ${this.name}`);
    Repos.tasks.save(this);
}

// Then we can export the object for use in our Node.js app
module.exports = Task;
