/**
 * Module for AJAX requests to a fake data store.
 * 
 * @returns {Object.<string, function>}
 */
var Ajax = (function ajaxIIFE() {
    
    /**
    * Fake data storage.
    * 
    * @type {Object.<string, string>}
    */
    var _data = {
        file1: 'The first file.',
        file2: 'The second file.',
        file3: 'The last file.'
    };
    
    /**
    * Psudeo-random number value.
    * 
    * @type {number}
    */
    var _randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;
    
    // --------------------------
    
    /**
    * Make an AJAX request with Promises
    * 
    * @param   {string}  url URL of the resource to get.
    * @returns {Promise}     Promise that will resolve to the requested resource.
    */
    function get(url) {
        console.log(`Requesting: ${url}`);
        var requestPromise = new Promise(function promiseHandler(resolve, reject) {
            setTimeout(function timeoutHandler() {
                if (null != _data[url]) {
                    resolve(_data[url]);
                }
                else {
                    reject('URL not found');
                }
            }, _randomDelay);
        });
        return requestPromise;
    }
    
    // --------------------------
    var publicAPI = {
        get: get
    };
    return publicAPI;
    // --------------------------
})();

var FileLoader = (function fileLoaderIIFE() {

    /**
     * Cache for file promises.
     * 
     * @type {Array.<Promise>}
     */
    var _fileCache = [];

    // --------------------------------------

    function* _fileGenerator() {
        for (let i = 0; i < _fileCache.length; i++) {
            var fileContents = yield;
            logFile(fileContents);
        }
    }

    function _promiseHandler(filePromise, fileGenerator) {
        filePromise.then(
            function resolve(value) {
                fileGenerator.next(value);
            },
            function reject(reason) {
                fileGenerator.next(reason);
            }
        );
    }

    // --------------------------------------

    function logFile(fileContents) {
        console.log(fileContents);
    }

    function load(fileArray) {
        // Push AJAX promises to cache
        fileArray.forEach(function(file) {
            var filePromise = Ajax.get(file);
            _fileCache.push(filePromise);
        });

        // Set up Generator
        var generator = _fileGenerator();
        generator.next();

        // Resolve AJAX calls
        _fileCache.forEach(function(filePromise) {
            _promiseHandler(filePromise, generator);
        });
    }

    // --------------------------------------
    var publicAPI = {
        load: load,
        logFile: logFile
    };
    return publicAPI;
    // --------------------------------------
})(); 

var myFiles = ['file1', 'file2', 'file3'];
FileLoader.load(myFiles);