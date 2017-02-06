/**
 * List of obervers for Task objects.
 */
var ObserverList = function () {
    this.observerList = [];
};

/**
 * Add a new observer to the ObserverList
 * 
 * @param   {Object} observer Object to add as an observer.
 * @returns {number}        Length of the ObserverList.
 */
ObserverList.prototype.add = function (observer) {
    return this.observerList.push(observer);
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

module.exports = ObserverList;