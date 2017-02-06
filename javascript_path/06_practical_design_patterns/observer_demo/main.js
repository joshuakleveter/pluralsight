var Task = require("./task");

/**
 * Notify a user of task chagnes.
 */
var notificationService = function () {
    var message = "Notifying ";
    this.update = function (task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    };
};

/**
 * Log information about a task.
 */
var loggingService = function () {
    var message = "Logging: ";
    this.update = function (task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    };
};

/**
 * Audit a task's status.
 */
var auditingService = function () {
    var message = "Auditing: ";
    this.update = function (task) {
        console.log(`${message} ${task.user} for task ${task.name}`);
    };
};

/**
 * List of obervers for Task objects.
 */
var ObserverList = function () {
    this.observerList = [];
};

/**
 * Add a new observer to the ObserverList
 * 
 * @param {Object} observer Object to add as an observer.
 * @returns {number}        Length of the ObserverList.
 */
ObserverList.prototype.add = function (observer) {
    return this.observerList.push(observer);
};

var task1 = new Task({
    name: "Demo Task",
    user: "Josh"
});

var notifier = new notificationService();
var logger = new loggingService();
var auditor = new auditingService();

task1.save();