const calculateNumber = require('./0-calcul')
const assert = require('assert');

describe('calculateNumber', function () {
    it('test with values', function () {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 5);
    });
    it('checks negative numbers', function () {
        assert.strictEqual(calculateNumber(-1, -1), -2);
        assert.strictEqual(calculateNumber(1, -1), 0);
    });
});