// Public API ------------------------------------------------------------------

function run(generator, args) {
    var response = generator.next(args);
    
    while (false == response.done) {
        response.value.then(
            function resolve(value) {
                generator.next(value);
            },
            function reject(reason) {
                generator.next(reason);
            }
        );
    }
}

// Exports ---------------------------------------------------------------------

module.exports = run;