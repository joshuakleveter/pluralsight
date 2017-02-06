var repo = {
    tasks: {},
    commands: [],
    get: function (id) {
        console.log(`Getting task: ${id}`);
        return {
            name: "New task from database"
        };
    },
    save: function (task) {
        repo.tasks[task.id] = task;
        console.log(`Saving ${task.name} to the database`);
    },
    replay: function () {
        for (let i = 0; i < repo.commands.length; i++) {
            var command = repo.commands[i];
            repo.executeNoLog(command.name, command.obj);
        }
    }
};

repo.execute = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);

    repo.commands.push({
        name: name,
        obj: args[0]
    });

    if (repo[name]) {
        return repo[name].apply(repo, args);
    }

    return false;
};

repo.executeNoLog = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (repo[name]) {
        return repo[name].apply(repo, args);
    }

    return false;
};

for (var i = 1; i <= 4; i++) {
    repo.execute('save', {
        id: +`${i}`,
        name: `Task ${i}`,
        completed: false
    });
}

console.log(repo.tasks);

repo.tasks = {};

console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);