
var _dataStore = {
    file1: 'This is file number 1.',
    file2: 'This is the second file.',
    file3: 'This is the last file.'
};

// -----------------------------------------------------------------------------

/**
 * Generate a random time for setTimeout
 * 
 * @returns {number} Timeout length
 */
function _randomDelay() {
    return (Math.random() * 10000) + 1000;
}

// -----------------------------------------------------------------------------

export default function get(url) {
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
}