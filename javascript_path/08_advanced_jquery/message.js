var showEventMessage = function (options) {
    options = $.extend({
        eventType: "CLICK",
        eventTarget: this,
        suffix: "<br/>"
    },
    options);

    var message = options.eventType + ': ' +
                  (options.eventTarget.nodeName || "unknown") +
                  options.suffix;

    $("#messages").append(message);
};