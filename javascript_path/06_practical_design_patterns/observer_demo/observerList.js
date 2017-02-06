/**
 * List of obervers for Task objects.
 */
var ObserverList = function () {
    this.observerList = [];
};

/**
 * Add a new observer to the ObserverList
 * 
 * @param   {function} observer function to add as an observer.
 * @returns {number}            Length of the ObserverList.
 */
ObserverList.prototype.add = function (observer) {
    return this.observerList.push(observer);
};

/**
 * Get the length of the observerList
 * 
 * @returns {number} Length of the observerList
 */
ObserverList.prototype.count = function () {
    return this.observerList.length;
};

/**
 * Get an observer from ObserverList.
 * 
 * @param   {number} index index of the observer to get.
 * @returns {Object}     The requested observer object.
 *                       Returns -1 if the requested index does not exist.
 */
ObserverList.prototype.get = function (index) {
    if (index >= 0 && index < this.observerList.length) {
        return this.observerList[index];
    }
    else {
        return -1;
    }
};

/**
 * Allow observers to opt-out of notifications.
 * 
 * @param {number} index index of the observer to remove.
 */
ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
};

module.exports = ObserverList;