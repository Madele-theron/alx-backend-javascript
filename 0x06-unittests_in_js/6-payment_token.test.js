const getPaymentTokenFromAPI = require("./6-payment_token");
const {describe, it} = require("mocha");
const chai = require('chai');
const expect = require("chai").expect;

describe("getPaymentTokenFromAPI", function() {
    it("test async w/ done", (done) => {
	getPaymentTokenFromAPI(true)
	    .then((result) => {
		chai.expect(result).to.include({data: 'Successful response from the API' });
		done();
	    })
        .catch((error) => done(error));
    });
});
