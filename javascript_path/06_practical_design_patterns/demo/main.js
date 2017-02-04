var Task = require("./task");
var Repo = require("./taskRepository");

var task1 = new Task(Repo.get(1));
var task2 = new Task("Build a demo project");
var task3 = new Task("Learn React.js");
var task4 = new Task("Learn C#");

task1.complete();
task2.save();
task3.save();
task4.save();