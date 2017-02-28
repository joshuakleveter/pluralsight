var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    if ('/file.txt' == request.url) {
        fs.createReadStream(`${__dirname}/file.txt`)
            .pipe(response);
    }
    else {
        response.end('Hello World!');
    }
})
    .listen(80, '127.0.0.1');

process.stdout.write('Server running!\n');