var fs = require('fs');
var http = require('http');
var socketio = require('socket.io');

var handler = function(request, response) {
    fs.readFile(`${__dirname}/index.html`, function(err, data) {
        if (err) {
            response.writeHead(500);
            return response.end('Error loading index.html');
        }
        else {
            response.writeHead(200);
            response.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection', function(socket) {
    setInterval(function() {
        var timestamp = Date.now();
        console.log(`Emitted ${timestamp}`);
        socket.emit('timer', timestamp);
    }, 2000);

    socket.on('submit', function(data) {
        console.log(`Submitted ${data}`);
    });
});

app.listen(80);

console.log('Server running!');