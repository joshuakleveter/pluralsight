var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
    var e = new EventEmitter();

    process.nextTick(function() {
        var count = 0;
        e.emit('start');
        var t = setInterval(function() {
            e.emit('data', ++count);
            if (c === count) {
                e.emit('end', count);
                clearInterval();
            }
        }, 1000);
    });
    return e;
};

var getOtherResource = function(c) {
    var e = new EventEmitter();

    process.nextTick(function() {
        var count = 0;
        e.emit('start');
        var t = setInterval(function() {
            e.emit('data', ++count);
            if (c === count) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 500);
    });
    return e;
};

var r = getResource(5);
var o = getOtherResource(10);

var start = function() {
    console.log('I\'ve started!');
};

var data = function(d) {
    console.log('I have data --> ' + d);
};

var end = function(t) {
    console.log(`I'm done with ${t} data events.`);
};

r.on('start', start);
r.on('data', data);
r.on('end', end);
o.on('start', start);
o.on('data', data);
o.on('end', end);
