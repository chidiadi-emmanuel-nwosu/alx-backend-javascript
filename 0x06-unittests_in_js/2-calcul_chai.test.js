const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
      expect(calculateNumber('SUM', 2.5, 4.6)).to.equal(8);
    });

    it('should return 0 if both numbers are 0', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should handle negative inputs correctly', () => {
      expect(calculateNumber('SUM', -1.4, -3.5)).to.equal(-4);
      expect(calculateNumber('SUM', -2.5, -4.6)).to.equal(-7);
      expect(calculateNumber('SUM', -1.4, 3.5)).to.equal(3);
      expect(calculateNumber('SUM', 2.5, -4.6)).to.equal(-2);
    });

    it('should handle decimal inputs correctly', () => {
      expect(calculateNumber('SUM', 1.49, 3.5)).to.equal(5);
      expect(calculateNumber('SUM', 2.51, 4.6)).to.equal(8);
    });

    it('should handle integer inputs correctly', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 2, 4)).to.equal(6);
    });

    it('should handle small inputs correctly', () => {
      expect(calculateNumber('SUM', Number.MIN_VALUE, Number.MIN_VALUE)).to.equal(0);
    });

    it('should handle infinity inputs correctly', () => {
      expect(calculateNumber('SUM', Infinity, 5)).to.equal(Infinity);
      expect(calculateNumber('SUM', -Infinity, -5)).to.equal(-Infinity);
    });

    it('should return NaN if any input is NaN', () => {
      expect(calculateNumber('SUM', NaN, 5)).to.be.NaN;
      expect(calculateNumber('SUM', 5, NaN)).to.be.NaN;
      expect(calculateNumber('SUM', NaN, NaN)).to.be.NaN;
    });

    it('should handle precision and rounding correctly', () => {
      expect(calculateNumber('SUM', 1.2345, 2.3456)).to.equal(3);
      expect(calculateNumber('SUM', 1.23456789, 2.3456789)).to.equal(3);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the difference of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 5.4, 3.5)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 4.6, 2.5)).to.equal(2);
    });

    it('should return 0 if both numbers are 0', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('should handle negative inputs correctly', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -3.5)).to.equal(2);
      expect(calculateNumber('SUBTRACT', -2.5, -4.6)).to.equal(3);
      expect(calculateNumber('SUBTRACT', -1.4, 3.5)).to.equal(-5);
      expect(calculateNumber('SUBTRACT', 2.5, -4.6)).to.equal(8);
    });

    it('should handle decimal inputs correctly', () => {
      expect(calculateNumber('SUBTRACT', 1.49, 3.5)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 2.51, 4.6)).to.equal(-2);
    });

    it('should handle integer inputs correctly', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 2, 4)).to.equal(-2);
    });

    it('should handle small inputs correctly', () => {
      expect(calculateNumber('SUBTRACT', Number.MIN_VALUE, Number.MIN_VALUE)).to.equal(0);
    });

    it('should handle infinity inputs correctly', () => {
      expect(calculateNumber('SUBTRACT', Infinity, 5)).to.equal(Infinity);
      expect(calculateNumber('SUBTRACT', -Infinity, -5)).to.equal(-Infinity);
    });

    it('should return NaN if any input is NaN', () => {
      expect(calculateNumber('SUBTRACT', NaN, 5)).to.be.NaN;
      expect(calculateNumber('SUBTRACT', 5, NaN)).to.be.NaN;
      expect(calculateNumber('SUBTRACT', NaN, NaN)).to.be.NaN;
    });

    it('should handle precision and rounding correctly', () => {
      expect(calculateNumber('SUBTRACT', 1.2345, 2.3456)).to.equal(-1);
      expect(calculateNumber('SUBTRACT', 1.23456789, 2.3456789)).to.equal(-1);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the quotient of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    });

    it('should return "Error" if the rounded value of b is 0', () => {
      expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
    });

    it('should handle negative inputs correctly', () => {
      expect(calculateNumber('DIVIDE', -6, 2)).to.equal(-3);
      expect(calculateNumber('DIVIDE', 6, -2)).to.equal(-3);
      expect(calculateNumber('DIVIDE', -6, -2)).to.equal(3);
    });

    it('should handle decimal inputs correctly', () => {
      expect(calculateNumber('DIVIDE', 6.6, 2)).to.equal(3.5);
      expect(calculateNumber('DIVIDE', 6, 2.5)).to.equal(2);
    });

    it('should handle integer inputs correctly', () => {
      expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
      expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
    });

    it('should handle small inputs correctly', () => {
      expect(calculateNumber('DIVIDE', Number.MIN_VALUE, Number.MIN_VALUE)).to.equal('Error');
    });

    it('should handle infinity inputs correctly', () => {
      expect(calculateNumber('DIVIDE', Infinity, 5)).to.equal(Infinity);
      expect(calculateNumber('DIVIDE', -Infinity, -5)).to.equal(Infinity);
      expect(calculateNumber('DIVIDE', Infinity, Infinity)).to.be.NaN;
      expect(calculateNumber('DIVIDE', -Infinity, Infinity)).to.be.NaN;
    });

    it('should return NaN if any input is NaN', () => {
      expect(calculateNumber('DIVIDE', NaN, 5)).to.be.NaN;
      expect(calculateNumber('DIVIDE', 5, NaN)).to.be.NaN;
      expect(calculateNumber('DIVIDE', NaN, NaN)).to.be.NaN;
    });

    it('should handle precision and rounding correctly', () => {
      expect(calculateNumber('DIVIDE', 1.2345, 2.3456)).to.equal(0.5);
      expect(calculateNumber('DIVIDE', 1.23456789, 2.3456789)).to.equal(0.5);
    });
  });
});
