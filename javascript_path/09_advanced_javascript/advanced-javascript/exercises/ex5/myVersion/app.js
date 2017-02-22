'use strict';

var FileLoader = require('./modules/FileLoader');
var Generate = require('./modules/Generate');

var myFiles = ['file1', 'file2', 'file3'];
var fileGenerator = FileLoader(myFiles);

Generate(fileGenerator);