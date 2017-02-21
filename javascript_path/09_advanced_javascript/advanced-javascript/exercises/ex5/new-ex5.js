/**
* Structure:
* 
* - Ajax module
* 	- Handle AJAX calls
* 
* - FileLoader module
* 	- getFiles() generator
* 		- Take an Array of filenames
* 		- Load cocurrently
* 		- Render in same order as array
* 	- renderFile()
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