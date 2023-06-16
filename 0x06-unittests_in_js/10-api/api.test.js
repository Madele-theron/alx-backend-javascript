const request = require('request');
const chai = require('chai');
const {describe, it} = require("mocha");

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

describe('GET /cart', () => {
    it('endpoint: GET /cart', (done) => {
        const apicall = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
        };

        request(apicall, (error, response, body) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });
describe('GET /cart/:isNaN', () => {
    it('endpoint: GET /cart/:isNaN', (done) => {
        const apicall = {
        url: 'http://localhost:7865/cart/something',
        method: 'GET',
        };

        request(apicall, (error, response, body) => {
            chai.expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
    });
});