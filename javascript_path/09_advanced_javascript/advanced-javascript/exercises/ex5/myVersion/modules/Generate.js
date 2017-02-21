// Public API ------------------------------------------------------------------

function run(generator, inputValue) {
    var value = inputValue || null;
    var response = generator.next(value);
    
    if (false === response.done) {
        response.value.then(
            function resolve(value) {
                run(generator, value);
            },
            function reject(reason) {
                run(generator, reason);
            }
        );
    }
}

// Exports ---------------------------------------------------------------------

module.exports = run;