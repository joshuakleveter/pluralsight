var repo = {
    get: function (id) {
        console.log(`Getting task: ${id}`);
        return {
            name: "New task from database"
        };
    },
    save: function (task) {
        console.log(`Saving ${task.name} to the database`);
    }
};

repo.execute = function (name) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (repo[name]) {
        return repo[name].apply(repo, args);
    }

    return false;
};