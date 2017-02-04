"use strict";

/**
 * This is a decorator for the Task constructor
 * 
 * This is an example of _simple_ decoration.
 */

var Task = require("./task");

var urgentTask = new Task({name: "Urgent Task"});
urgentTask.priority = 2;
urgentTask.notify = function () {
    console.log("This task is urgent");
};
urgentTask.save = function () {
    this.notify();
    Task.prototype.save.call(this);
};

urgentTask.save();
urgentTask.complete();