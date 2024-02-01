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
});
