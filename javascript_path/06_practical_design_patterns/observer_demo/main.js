var Task = require("./task");

var task1 = new Task({
    name: "Demo Task",
    user: "Josh"
});

task1.save();