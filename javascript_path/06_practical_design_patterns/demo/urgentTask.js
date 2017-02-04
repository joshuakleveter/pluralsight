"use strict";

/**
 * This is a decorator for the Task constructor
 * 
 * This is an example of _simple_ decoration.
 */

// var Task = require("./task");

// var urgentTask = new Task({name: "Urgent Task"});
// urgentTask.priority = 2;
// urgentTask.notify = function () {
//     console.log("This task is urgent");
// };
// urgentTask.save = function () {
//     this.notify();
//     Task.prototype.save.call(this);
// };

// urgentTask.save();
// urgentTask.complete();

/**
 * This is a decorator for the Task constructor
 * 
 * Below is an example of a proper decorator that extends
 * the original constructor via the prototype chain
 */

var Task = require("./task");

function UrgentTask (name, priority) {
    Task.call(this, {
        name: name
    });
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.constructor = UrgentTask;

UrgentTask.prototype.notify = function () {
    console.log("This task is urgent!");
}

UrgentTask.prototype.save = function () {
    this.notify();
    Task.prototype.save.call(this);
}

var ut = new UrgentTask("urgent", 1);

ut.save();
ut.complete();