var Service = require("./service");

var NotificationService = function () {
    Service.call(this, "Notifying:");
};
NotificationService.prototype = Object.create(Service.prototype);
NotificationService.prototype.constructor = NotificationService;

module.exports = NotificationService;