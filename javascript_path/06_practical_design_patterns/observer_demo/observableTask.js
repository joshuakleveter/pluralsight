var Task = require("./task");
var ObserverList = require("./observerList");

/**
 * Extend Task with the ability to add observers.
 * 
 * @param {Object} data A JSON object with data for the task.
 * @param {boolean} data.completed Is the task complete?
 * @param {string}  data.name      Name of the task.
 * @param {number}  data.priority Priority of the task from 1 to 5.
 * @param {string}  data.project  Name of project to associate task with.
 * @param {string}  data.user     Name of the user associated with the task.
 */
var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};
ObservableTask.prototype = Object.create(Task.prototype);
ObservableTask.prototype.constructor = ObservableTask;

/**
 * Add a new observer to ObservableTask
 * 
 * @param {Object} observer Observer object
 */
ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};

/**
 * Notify observers of update.
 * 
 * @param {Object} context This context to run notify in.
 */
ObservableTask.prototype.notify = function (context) {
    var observerCount = this.observers.count();

    /**
     * In real life we would be checking to make sure that our
     * observers are valid, execuatable functions.
     */

    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
};

/**
 * Save an observable task.
 */
ObservableTask.prototype.save = function () {
    this.notify(this);

    Task.prototype.save.call(this);
};

module.exports = ObservableTask;