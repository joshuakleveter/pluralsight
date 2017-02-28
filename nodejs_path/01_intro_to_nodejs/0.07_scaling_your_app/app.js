var cp = require('child_process');

var child = cp.fork(`${__dirname}/child.js`);

child.send({data: 'Hello from parent.'});

child.on('message', function(message) {
    console.log(message.data);
});