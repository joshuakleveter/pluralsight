// Imports ---------------------------------------------------------------------

var Ajax = require('./Ajax');
var Logger = require('./Logger');

// Private Data ----------------------------------------------------------------

/**
 * Array to store pending AJAX promises.
 * 
 * @type {Promise[]}
 */
var _promiseCache = [];

// Public API ------------------------------------------------------------------

function* load(fileArray) {
    fileArray.forEach(function forEachHandler(filename) {
        var filePromise = Ajax(filename);
        _promiseCache.push(filePromise);
    });

    for (let i = 0; i < _promiseCache.length; i++) {
        var fileContents = yield _promiseCache[i];
        Logger(fileContents);
    }

    Logger('Complete!');
}

// Exports ---------------------------------------------------------------------