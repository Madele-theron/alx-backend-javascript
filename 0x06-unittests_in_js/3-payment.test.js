const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const {describe, it} = require("mocha");
const sinon = require("sinon");
const assert = require("assert");

describe("sendPaymentRequestToApi", () => {
    it("validate utils function", () =>  {
	const spy = sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);

	assert(spy.calledOnce);
	spy.restore();
    });
});
