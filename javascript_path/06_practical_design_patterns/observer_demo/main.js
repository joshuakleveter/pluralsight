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

var task1 = new Task({
    name: "Demo Task",
    user: "Josh"
});

task1.save();