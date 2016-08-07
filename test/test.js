/*
 * If you want run tests please install the test framework Mocha (https://mochajs.org).
 * Then type the command on the parent folder: mocha test
 */

// Require assert mocha
var assert = require('assert');

// Require the sentiment module
var sentiment = require('../index');

describe('English', function() {
    it('It should return positive or negative', function() {
        assert.equal('negative', sentiment('Cats are stupid.', 'en').vote);
        assert.equal('positive', sentiment('Cats are totally amazing!', 'en').vote);
    });
});

describe('Italian', function() {
    it('It should return positive or negative', function() {
        assert.equal('positive', sentiment('Il mare è bello', 'it').vote);
        assert.equal('negative', sentiment('I gatti sono stupidi.','it').vote);
    });
});
