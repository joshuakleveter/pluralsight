var cluster = require('cluster');
var http    = require('http');

var numWorkers = 2;

if (cluster.isMaster) {
    for (let i = 0; i < numWorkers; i++) {
        process.stdout.write('master: forking a worker\n');
        cluster.fork();
    }

    cluster
    .on('fork', function(worker) {
        process.stdout.write(`master: fork event: worker ${worker.id}\n`);
    })
    .on('online', function(worker) {
        process.stdout.write(`master: online event: worker ${worker.id}\n`);
    })
    .on('listening', function(worker, address) {
        process.stdout.write(`master: listening event: worker ${worker.id}, PID ${worker.process.pid}, ${address.address}, ${address.port}\n`);
    })
    .on('exit', function(worker, code, signal) {
        process.stdout.write(`master: exit event: worker ${worker.id}\n`);
    });
}
else {
    process.stdout.write(`worker: worker # ${cluster.worker.id} is ready!\n`);

    var count = 0;

    http.createServer(function(request, response) {
        response.writeHead(200);
        count++;
        process.stdout.write(`Worker # ${cluster.worker.id} is incrementing count to ${count}\n`);
        response.end(`Hello World from worker # ${cluster.worker.id} (pid ${cluster.worker.process.pid}) with count ${count}\n`);
        if (3 == count) {
            cluster.worker.destroy();
        }
    })
    .listen(80, '127.0.0.1');
}