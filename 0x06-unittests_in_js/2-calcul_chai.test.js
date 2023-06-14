const calculateNumber = require('./2-calcul_chai')
const { expect } = require('chai');
const assert = require('assert').strict;

describe("calculateNumber", function() {
    describe('SUM', () => {
        it('checks neg & pos', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
            assert.strictEqual(calculateNumber('SUM', 1.6, 2.6), 5);
            assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
            assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
            assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
        })
    });

    describe('SUBTRACT', () => {
        it('checks neg & pos', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.6), 3);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.3), -1);
            assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
            assert.strictEqual(calculateNumber('SUBTRACT', 6.1, 6.1), 0);
            assert.strictEqual(calculateNumber('SUBTRACT', -4.9, -2.7), -2);
            assert.strictEqual(calculateNumber('SUBTRACT', 4.9, 2.7), 2);
        });
    });

    describe('DIVIDE', () => {
    it('checks neg & pos', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
        assert.strictEqual(calculateNumber('DIVIDE', -1, 1), -1);
        assert.strictEqual(calculateNumber('DIVIDE', 4.6, 1.8), 2.5);
        assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
    });
});