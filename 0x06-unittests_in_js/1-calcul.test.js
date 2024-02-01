const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
      assert.strictEqual(calculateNumber('SUM', 2.5, 4.6), 8);
    });

    it('should return 0 if both numbers are 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('should handle negative inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -3.5), -4);
      assert.strictEqual(calculateNumber('SUM', -2.5, -4.6), -7);
      assert.strictEqual(calculateNumber('SUM', -1.4, 3.5), 3);
      assert.strictEqual(calculateNumber('SUM', 2.5, -4.6), -2);
    });

    it('should handle decimal inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 1.49, 3.5), 5);
      assert.strictEqual(calculateNumber('SUM', 2.51, 4.6), 8);
    });

    it('should handle integer inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 2, 4), 6);
    });

    it('should handle small inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUM', Number.MIN_VALUE, Number.MIN_VALUE), 0);
    });

    it('should handle infinity inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUM', Infinity, 5), Infinity);
      assert.strictEqual(calculateNumber('SUM', -Infinity, -5), -Infinity);
    });

    it('should return NaN if any input is NaN', () => {
      assert.ok(isNaN(calculateNumber('SUM', NaN, 5)));
      assert.ok(isNaN(calculateNumber('SUM', 5, NaN)));
      assert.ok(isNaN(calculateNumber('SUM', NaN, NaN)));
    });

    it('should handle precision and rounding correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2345, 2.3456), 3);
      assert.strictEqual(calculateNumber('SUM', 1.23456789, 2.3456789), 3);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the difference of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 3.5), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 4.6, 2.5), 2);
    });

    it('should return 0 if both numbers are 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('should handle negative inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.5), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.5, -4.6), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 3.5), -5);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, -4.6), 8);
    });

    it('should handle decimal inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.49, 3.5), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.51, 4.6), -2);
    });

    it('should handle integer inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 4), -2);
    });

    it('should handle small inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', Number.MIN_VALUE, Number.MIN_VALUE), 0);
    });

    it('should handle infinity inputs correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', Infinity, 5), Infinity);
      assert.strictEqual(calculateNumber('SUBTRACT', -Infinity, -5), -Infinity);
    });

    it('should return NaN if any input is NaN', () => {
      assert.ok(isNaN(calculateNumber('SUBTRACT', NaN, 5)));
      assert.ok(isNaN(calculateNumber('SUBTRACT', 5, NaN)));
      assert.ok(isNaN(calculateNumber('SUBTRACT', NaN, NaN)));
    });

    it('should handle precision and rounding correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2345, 2.3456), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.23456789, 2.3456789), -1);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the quotient of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
    });

    it('should return "Error" if the rounded value of b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0), 'Error');
    });

    it('should handle negative inputs correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6, 2), -3);
      assert.strictEqual(calculateNumber('DIVIDE', 6, -2), -3);
      assert.strictEqual(calculateNumber('DIVIDE', -6, -2), 3);
    });

    it('should handle decimal inputs correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.6, 2), 3.5);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2.5), 2);
    });

    it('should handle integer inputs correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 9, 3), 3);
    });

    it('should handle small inputs correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', Number.MIN_VALUE, Number.MIN_VALUE), 'Error');
    });

    it('should handle infinity inputs correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', Infinity, 5), Infinity);
      assert.strictEqual(calculateNumber('DIVIDE', -Infinity, -5), Infinity);
      assert.strictEqual(calculateNumber('DIVIDE', Infinity, Infinity), NaN);
      assert.strictEqual(calculateNumber('DIVIDE', -Infinity, Infinity), NaN);
    });

    it('should return NaN if any input is NaN', () => {
      assert.ok(isNaN(calculateNumber('DIVIDE', NaN, 5)));
      assert.ok(isNaN(calculateNumber('DIVIDE', 5, NaN)));
      assert.ok(isNaN(calculateNumber('DIVIDE', NaN, NaN)));
    });

    it('should handle precision and rounding correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2345, 2.3456), 0.5);
      assert.strictEqual(calculateNumber('DIVIDE', 1.23456789, 2.3456789), 0.5);
    });
  });
});
