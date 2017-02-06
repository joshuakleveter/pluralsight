/**
 * Base service.
 * 
 * @param {string} message message send with service updates.
 */
var Service = function (message) {
    this.message = `${message} `;
};

/**
 * Send an update message from this service
 * 
 * @param {Task} task the task object for update information.
 */
Service.prototype.update = function (task) {
    console.log(`${this.message} ${task.user} for task: ${task.name}`);
};

module.exports = Service;