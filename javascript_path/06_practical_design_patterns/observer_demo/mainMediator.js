var AuditingService = require("./auditingService");
var Task = require("./task");
var LoggingService = require("./loggingService");
var Mediator = require("./mediator");
var NotificationService = require("./notificationService");

var task1 = new Task({
    name: "Demo Task",
    user: "Josh"    
});

task1.complete = function () {
    Mediator.publish('complete', this);
    Task.prototype.complete.call(this);
};

var auditor = new AuditingService();
var logger = new LoggingService();
var notifier = new NotificationService();

Mediator.subscribe("complete", notifier, notifier.update);
Mediator.subscribe("complete", logger, logger.update);
Mediator.subscribe("complete", auditor, auditor.update);

task1.save();
task1.complete();