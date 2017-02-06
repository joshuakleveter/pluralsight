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

module.exports = ObservableTask;