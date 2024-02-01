const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
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

  it('should return the correct status code for cart route with valid id', (done) => {
    request.get('http://localhost:7865/cart/2', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message for cart route with valid id', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
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
