const calculateNumber = require('./0-calcul')
const { it, describe } = require("mocha")
const assert = require('assert');

describe('calculateNumber', function () {
    
    it('test with values', function () {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
