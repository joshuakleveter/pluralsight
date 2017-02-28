// var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

// var stream = request('http://www.google.com');

// stream.pipe(process.stdout);


fs.createReadStream(`${__dirname}/NOTES.md`)
    .pipe(zlib.createGzip())
    .pipe(process.stdout);