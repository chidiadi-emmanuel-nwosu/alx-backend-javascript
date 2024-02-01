const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    assert.strictEqual(calculateNumber(2.5, 4.6), 8);
  });

  it('should return 0 if both numbers are 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle negative inputs correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.5), -4);
    assert.strictEqual(calculateNumber(-2.5, -4.6), -7);
    assert.strictEqual(calculateNumber(-1.4, 3.5), 3);
    assert.strictEqual(calculateNumber(2.5, -4.6), -2);
  });

  it('should handle decimal inputs correctly', () => {
    assert.strictEqual(calculateNumber(1.49, 3.5), 5);
    assert.strictEqual(calculateNumber(2.51, 4.6), 8);
  });

  it('should handle integer inputs correctly', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(2, 4), 6);
  });

  it('should handle small inputs correctly', () => {
    assert.strictEqual(calculateNumber(Number.MIN_VALUE, Number.MIN_VALUE), 0);
  });

  it('should handle infinity inputs correctly', () => {
    assert.strictEqual(calculateNumber(Infinity, 5), Infinity);
    assert.strictEqual(calculateNumber(-Infinity, -5), -Infinity);
  });

  it('should return NaN if any input is NaN', () => {
    assert.ok(isNaN(calculateNumber(NaN, 5)));
    assert.ok(isNaN(calculateNumber(5, NaN)));
    assert.ok(isNaN(calculateNumber(NaN, NaN)));
  });

  it('should handle precision and rounding correctly', () => {
    assert.strictEqual(calculateNumber(1.2345, 2.3456), 3);
    assert.strictEqual(calculateNumber(1.23456789, 2.3456789), 3);
  });
});
