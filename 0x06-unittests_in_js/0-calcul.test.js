const calculateNumber = require('./0-calcul')
const assert = require('assert');

describe('calculateNumber', function () {
    it('test with values', function () {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 5);
        assert.strictEqual(calculateNumber(-1, -1), -2);
        assert.strictEqual(calculateNumber(1, -1), 0);
        assert.strictEqual(calculateNumber(1.2, 2.1), 3);
        assert.strictEqual(isNaN(calculateNumber()), true);
    });
});