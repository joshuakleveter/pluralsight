var Task = function (data) {
    this.name = data.name;
    this.flyweight = FlyweightFactory.get(
        data.project,
        data.priority,
        data.user,
        data.completed
    );
};

function Flyweight(project, priority, user, completed) {
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.completed = completed;
}

var FlyweightFactory = function () {
    var flyweights = {};

    var get = function (project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = new Flyweight(
                project,
                priority,
                user,
                completed
            );
        }
        return flyweights[project + priority + user + completed];
    };

    var getCount = function () {
        var count = 0;
        for (var f in flyweights) count++;
        return count;
    };

    return {
        get: get,
        getCount: getCount
    };
}();


function TaskCollection() {
    var tasks = {};
    var count = 0;

    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };

    var get = function (name) {
        return tasks[name];
    };

    var getCount = function () {
        return count;
    };

    return {
        add: add,
        get: get,
        getCount: getCount
    };
}

var tasks = new TaskCollection();

var projects = [
    'none',
    'courses',
    'training',
    'projects'
];

var priorites = [1, 2, 3, 4, 5];

var users = [
    'Jon',
    'Erica',
    'Amanda',
    'Nathan'
];

var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

// Create us a whole bunch of random tasks:
for (var i = 0; i < 100000; i++) {
    tasks.add({
        name: `task${i}`,
        priority: priorites[Math.floor(Math.random() * 5)],
        project: projects[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 4)],
        completed: completed[Math.floor(Math.random() * 2)]
    });
}

var afterMemory = process.memoryUsage().heapUsed;

console.log(`used memory: ${(afterMemory - initialMemory) / 1000000}`);
console.log(`Tasks: ${tasks.getCount()}`);
console.log(`Flyweight Count: ${FlyweightFactory.getCount()}`);

// BEFORE flyweight we used 30MB of memory to create 100,000 tasks
// AFTER flyweights add used 26MB of memory to create 100,000 tasks w/ 160 flyweights.