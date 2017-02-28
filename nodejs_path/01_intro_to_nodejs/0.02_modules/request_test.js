var request = require('request');

request('http://www.bedrockimage.com', function(error, response, body) {
    if (!error && 200 == response.statusCode) {
        console.log(body);
    }
});