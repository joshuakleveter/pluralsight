/**
 * Mediator for Task alerts.
 * 
 * Revealing Module pattern.
 * 
 * @returns {Object} Mediator object.
 */
var mediator = (function () {
    var channels = {};

    /**
     * Subscribe to a channel.
     * 
     * @param {string}   channel Name of the channel to subscribe to.
     * @param {Object}   context Context for this binding.
     * @param {Function} callback Callback function for the channel.
     */
    var subscribe = function (channel, context, callback) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }

        mediator.channels[channel].push({
            context: context,
            callback: callback
        });
    };

    /**
     * Publish notification to a channel.
     * 
     * @param   {string}  channel Name of channel to publish.
     * @returns {boolean}         Returns false if channel does not exist.
     */
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