var fs = require('fs');

fs.createReadStream(`${__dirname}/NOTES.md`)
    .pipe(process.stdout);
