const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the expected data',
    (done) => {
      const response = { data: 'Successful response from the API' };
      getPaymentTokenFromAPI(true)
        .then((result) => {
          expect(result).to.deep.equal(response);
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
});
