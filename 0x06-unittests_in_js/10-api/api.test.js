const request = require('request');
const { expect } = require('chai');

describe('routes', () => {
  describe('GET /', () => {
    it('should return the correct status code foor a valid route', (done) => {
      request.get('http://localhost:7865', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should return the correct message', (done) => {
      request.get('http://localhost:7865', (err, res, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });

    it('should return the correct status code for invalid route', (done) => {
      request.get('http://localhost:7865/invalid-route', (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return the correct status code and message for cart route with valid id', (done) => {
      request.get('http://localhost:7865/cart/12', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return the correct status code for cart route with invalid id', (done) => {
      request.get('http://localhost:7865/cart/hello', (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should respond with the correct status code and a welcome message', (done) => {
      request.post({
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' },
        headers: { 'Content-Type': 'application/json' }
      }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
