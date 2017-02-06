"use strict";

/**
 * This file is responsible for all of our database calls.
 */

/**
 * Module to handle DB access.
 * 
 * @returns {Object}
 */
var repo = function () {
    return {
        /**
         * Get a task from the database.
         * 
         * @param {number} id
         * @returns {Object}
         */
        get: function (id) {
            console.log(`Getting task: ${id}`);
            return {
                name: "New task from db."
            };
        },
        /**
         * Save a task to the database.
         * 
         * @param {Object} task
         */
        save: function (task) {
            console.log(`Saving ${task.name} to the database`);
        }
    };
}

/**
 * NOTE: As we are executing the repo() function with module.exports
 * the actual value of module.exports _is_ the return value of repo().
 * It's also a singleton.
 */
module.exports = repo();