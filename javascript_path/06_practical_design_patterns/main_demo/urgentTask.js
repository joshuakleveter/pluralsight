"use strict";

var Task = require("./task");

/**
 * Create UrgentTask objects.
 * 
 * @param {string} name
 * @param {number} priority
 * 
 * @returns {Object}
 */
function UrgentTask (name, priority) {
    Task.call(this, {
        name: name
    });
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.constructor = UrgentTask;

/**
 * Notify important people about this task.
 */
UrgentTask.prototype.notify = function () {
    console.log("This task is urgent!");
}

/**
 * Save this task.
 */
UrgentTask.prototype.save = function () {
    this.notify();
    Task.prototype.save.call(this);
}

var ut = new UrgentTask("urgent", 1);

ut.save();
ut.complete();