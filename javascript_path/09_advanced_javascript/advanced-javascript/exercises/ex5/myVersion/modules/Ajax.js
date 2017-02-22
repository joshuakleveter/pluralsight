'use strict';

// Private Data ----------------------------------------------------------------

/**
 * Mock file database.
 * 
 * @type {Object.<string, string>}
 */
var _dataStore = {
    file1: 'This is file number 1.',
    file2: 'This is the second file.',
    file3: 'This is the last file.'
};

// Private Functions -----------------------------------------------------------

/**
 * Generate a random time for setTimeout
 * 
 * @returns {number} Timeout length
 */
function _randomDelay() {
    return (Math.random() * 1000) + 1000;
}

// Public API ------------------------------------------------------------------

/**
 * Make a mock AJAX request to our fake database.
 * 
 * @param   {string}  url File URL to request
 * @returns {Promise}     Promise that will resolve to file contents
 */
function get(url) {
    var resourcePromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (null != _dataStore[url]) {
                resolve(_dataStore[url]);
            }
            else {
                reject('URL not found.');
            }
        }, _randomDelay());
    });

    return resourcePromise;
}

// Exports ---------------------------------------------------------------------

module.exports = get;