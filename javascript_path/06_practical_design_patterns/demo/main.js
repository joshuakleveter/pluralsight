var Task = require("./task");
var Repos = require("./repoFactory");

var task1 = new Task(Repos.tasks.get(1));
var task2 = new Task({name: 'Build a demo project'});
var task3 = new Task({name: 'Learn React.js'});
var task4 = new Task({name: 'Learn C#'});

task1.complete();
task2.save();
task3.save();
task4.save();