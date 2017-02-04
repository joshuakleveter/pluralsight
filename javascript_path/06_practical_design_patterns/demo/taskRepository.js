"use strict";

/**
 * This file is responsible for all of our database calls.
 */

var repo = function () {
    return {
        get: function (id) {
            console.log(`Getting task: ${id}`);
            return {
                name: "New task from db."
            };
        },
        save: function (task) {
            console.log(`Saving ${task.name} to the database`);
        }
    };
}

/**
 * NOTE: As we are executing the repo() function with module.exports
 * the actual value of module.exports _is_ the return value of repo().
 */
module.exports = repo();