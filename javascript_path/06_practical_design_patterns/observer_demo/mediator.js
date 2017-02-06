var mediator = (function () {
    var channels = {};

    var subscribe = function (channel, context, callback) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }

        mediator.channels[channel].push({
            context: context,
            callback: callback
        });
    };

    var publish = function (channel) {
        if (!this.channels[channel]) {
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for (let i = 0; i < mediator.channels[channel]) {
            var subscriber = mediator.channels[channel][i];
            subscriber.callback.apply(subscriber.context, args);
        }
    };

    return {
        channels: channels,
        subscribe: subscribe,
        publish: publish
    };
})();

module.exports = mediator;