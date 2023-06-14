const request = require('request');
const chai = require('chai');
const {describe, it} = require("mocha");

describe('Index page', () => {

    describe('GET /', () => {
        it('endpoint', (done) => {
            const apicall = {
            url: 'http://localhost:7865',
            method: 'GET',
            };
            request(apicall, (error, response, body) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(body).to.equal('Welcome to the payment system');
            done();
            });
        });
        });
});
