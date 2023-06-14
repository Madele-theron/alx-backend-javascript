const calculateNumber = require('./2-calcul_chai')
const { expect } = require('chai');

describe('calculateNumber type == SUM', () => {
    it('checks neg & pos', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1.9, 0), 2);
        assert.strictEqual(calculateNumber('SUM', 6.1, 6.1), 12);
        assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
        assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
    })
});

describe('calculateNumber type == SUBTRACT', () => {
    it('checks neg & pos', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.6), 3);
        assert.strictEqual(calculateNumber('SUBTRACT', 1.9, 0), 2);
        assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
        assert.strictEqual(calculateNumber('SUBTRACT', 6.1, 6.1), 0);
        assert.strictEqual(calculateNumber('SUBTRACT', -1.5, 0), -1);
        assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 2), 3);
    });
});

describe('calculateNumber type == DIVIDE', () => {
it('checks neg & pos', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1, 1), -1);
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
});
});