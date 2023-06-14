const sendPaymentRequestToApi = require("./5-payment");
const {describe, it} = require("mocha");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", () => {
    beforeEach(() => sinon.spy(console, 'log'));
    afterEach(() => console.log.restore());

    it("check that console.log is called with the right arg", function() {
        sendPaymentRequestToApi(100, 20);
        expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it('sendPaymentRequestToAPI(10, 10)', () => {
        sendPaymentRequestToApi(10, 10);

        expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});

