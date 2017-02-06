var ObservableTask = require("./observableTask");

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

var task1 = new ObservableTask({
    name: "Demo Task",
    user: "Josh"    
});

var notifier = new notificationService();
var logger = new loggingService();
var auditor = new auditingService();

task1.addObserver(notifier.update);
task1.addObserver(logger.update);
task1.addObserver(auditor.update);

task1.save();

task1.removeObserver(auditor.update);

task1.save();