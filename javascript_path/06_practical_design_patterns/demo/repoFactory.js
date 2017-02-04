"use strict";

/**
 * Factory for loading various repository constructors.
 * 
 * @returns {Object} instance of repoFactory
 */
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

// Note the use of the `new` keyword. This is a singlton.
module.exports = new repoFactory;