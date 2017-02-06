var ObservableTask = require("./observableTask");
var AuditingService = require("./auditingService");
var LoggingService = require("./loggingService");
var NotificationService = require("./notificationService");


var task1 = new ObservableTask({
    name: "Demo Task",
    user: "Josh"    
});

var notifier = new NotificationService();
var logger = new LoggingService();
var auditor = new AuditingService();

task1.addObserver(notifier.update);
task1.addObserver(logger.update);
task1.addObserver(auditor.update);

task1.save();

task1.removeObserver(auditor.update);

task1.save();