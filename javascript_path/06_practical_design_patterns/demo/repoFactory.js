"use strict";

var repoFactory = function () {
    var repos = this;

    // In a normal app we would load a JSON file.
    var repoList = [
        {
            name: "tasks",
            source: "./taskRepository.js"
        }
    ];

    // Require all of our repos
    repoList.forEach( function (repo) {
        repos[repo.name] = require(repo.source);
    });
}

module.exports = new repoFactory;