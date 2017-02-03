/**
 * Example of the Constructor pattern
 */

var Task = function (name) {
    this.name = name;
    this.completed = false;

    this.complete = function () {
        this.completed = true;
        console.log(`Task completed: ${this.name}`);
    }    

    this.save = function () {
        console.log(`Saving task: ${this.name}`);
    }
}

var task1 = new Task("Learn JavaScript patterns");
var task2 = new Task("Build a demo project");
var task3 = new Task("Learn React.js");
var task4 = new Task("Learn C#");

task1.complete();
task2.save();
task3.save();
task4.save();