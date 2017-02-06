var Task = require("./task");
var ObserverList = require("./observerList");

/**
 * Extend Task with the ability to add observers.
 * 
 * @param {any} data
 */
var ObservableTask = new function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};
ObservableTask.prototype = Object.create(Task);
ObservableTask.prototype.constructor = ObservableTask;

/**
 * Add a new observer to ObservableTask
 * 
 * @param {Object} observer Observer object
 */
ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};

module.exports = ObservableTask;