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