/**
 * Create a new Task object.
 * 
 * Constructor
 * 
 * @param {Object} data A JSON object with data for the task.
 * @param {boolean} data.completed Is the task complete?
 * @param {string}  data.name      Name of the task.
 * @param {number}  data.priority Priority of the task from 1 to 5.
 * @param {string}  data.project  Name of project to associate task with.
 * @param {string}  data.user     Name of the user associated with the task.
 */
var Task = function (data) {
    this.completed = data.completed;
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
};

/**
 * Mark a task as complete.
 */
Task.prototype.complete = function () {
    console.log(`Completed task: ${this.name}`);
    this.completed = true;
};

/**
 * Save a task to the database.
 */
Task.prototype.save = function () {
    console.log(`Saving task: ${this.name}`);
};

// Export the Task constructor.
module.exports = Task;