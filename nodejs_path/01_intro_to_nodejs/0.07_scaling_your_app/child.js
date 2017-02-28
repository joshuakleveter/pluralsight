process.on('message', function(message) {
    console.log(message.data);
});

process.send({data: 'Hello from child'});