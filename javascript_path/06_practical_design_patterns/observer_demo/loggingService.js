var Service = require("./service");

var LoggingService = function () {
    Service.call(this, "Logging:");
};
LoggingService.prototype = Object.create(Service.prototype);
LoggingService.prototype.constructor = LoggingService;

module.exports = LoggingService;