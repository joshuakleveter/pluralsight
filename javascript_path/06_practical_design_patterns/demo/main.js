"use strict";

var Task = require("./task");
var Repos = require("./repoFactory");

var task1 = new Task(Repos.tasks.get(1));
var task2 = new Task(Repos.tasks.get(2));
var task3 = new Task(Repos.tasks.get(3));
var task4 = new Task(Repos.tasks.get(4));

task1.complete();
task2.save();
task3.save();
task4.save();