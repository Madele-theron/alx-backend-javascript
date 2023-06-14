const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe('SUM', () => {
        it('checks neg & pos', () => {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
            expect(calculateNumber('SUM', 1.6, 2.6)).to.equal(5);
            expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        })
    });

    describe('SUBTRACT', () => {
        it('checks neg & pos', () => {
            expect(calculateNumber('SUBTRACT', -1.4, -3.6)).to.equal(3);
            expect(calculateNumber('SUBTRACT', 1.4, 2.3)).to.equal(-1);
            expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
            expect(calculateNumber('SUBTRACT', 6.1, 6.1)).to.equal(0);
            expect(calculateNumber('SUBTRACT', -4.9, -2.7)).to.equal(-2);
            expect(calculateNumber('SUBTRACT', 4.9, 2.7)).to.equal(2);
        });
    });

    describe('DIVIDE', () => {
    it('checks neg & pos', () => {
        expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
        expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
        expect(calculateNumber('DIVIDE', 4.6, 1.8)).to.equal(2.5);
        expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
    });
});