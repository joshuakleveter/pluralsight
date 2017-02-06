var Service = require("./service");

var AuditingService = function () {
    Service.call(this, "Auditing:");
};
AuditingService.prototype = Object.create(Service.prototype);
AuditingService.prototype.constructor = AuditingService;

module.exports = AuditingService;