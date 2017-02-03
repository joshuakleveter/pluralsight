'use strict';

/**
 * Example of the Constructor pattern
 */

// First we create the constructor function.
var Task = function (name) {
    this.name = name;
    this.completed = false;
}

// Next we'll add properties to the object prototype
Task.prototype.complete = function () {
    this.completed = true;
    console.log(`Task completed: ${this.name}`);
}

Task.prototype.save = function () {
    console.log(`Saving task: ${this.name}`);
}

// Then we can create copies of the object and us them
var task1 = new Task("Learn JavaScript patterns");
var task2 = new Task("Build a demo project");
var task3 = new Task("Learn React.js");
var task4 = new Task("Learn C#");

task1.complete();
task2.save();
task3.save();
task4.save();