var should = require('should');

describe('Operators', function() {

    describe('Unary +', function() {

        it('should coerce a string to a number', function() {
            var str = "4";
            var num = +str;
            (typeof num).should.equal('number');
        });

    });

    describe('Binary +', function() {

        it('should add two numbers correctly', function() {
            var sum = 2 + 2;
            sum.should.equal(4);
        });

        it('should concatenate two strings', function() {
            var a = 'Hello ';
            var b = 'World';
            var c = a + b;
            c.should.equal('Hello World');
        });

    });

});