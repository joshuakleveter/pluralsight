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

task1.addObserver(NotificationService.prototype.update.bind(notifier));
task1.addObserver(LoggingService.prototype.update.bind(logger));
task1.addObserver(AuditingService.prototype.update.bind(auditor));

task1.save();

task1.removeObserver(AuditingService.prototype.update.bind(auditor));

task1.save();