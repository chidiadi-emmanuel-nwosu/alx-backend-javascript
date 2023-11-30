import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  set amount(setAmount) {
    if (typeof setAmount === 'number') {
      this._amount = setAmount;
    } else {
      throw new Error('Amount must be a number');
    }
  }

  get amount() {
    return this._amount;
  }

  set currency(setCurrency) {
    if (setCurrency instanceof Currency) {
      this._currency = setCurrency;
    } else {
      throw new Error('Currency must be an instanceof Currency');
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
}
