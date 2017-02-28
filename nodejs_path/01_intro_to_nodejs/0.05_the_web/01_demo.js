var http = require('http');

var options = {
    host: 'www.pluralsight.com',
    port: 80,
    path: '/'
};

process.stdout.write('Going to make a request...');

http.get(options, function(response) {
    process.stdout.write(`${response.statusCode}\n`);
    response.pipe(process.stdout);
});