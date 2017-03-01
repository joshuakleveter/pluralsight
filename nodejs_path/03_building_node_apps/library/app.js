var express = require('express');

var app = express();

var port = 5000;

app.listen(port, function(err) {
    console.log(`Running server on port ${port}`);
});

// .use sets up middleware
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(request, response) {
    response.send('Hello World!');
});
app.get('/books', function(request, response) {
    response.send('Hello Books.');
});