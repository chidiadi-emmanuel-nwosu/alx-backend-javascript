export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(setCode) {
    if (typeof setCode !== 'string') { throw new Error('Code must be a string'); }
    this._code = setCode;
  }

  get code() {
    return `${this._code}`;
  }

  set name(setName) {
    if (typeof setName !== 'string') { throw new Error('Name must be a string'); }
    this._name = setName;
  }

  get name() {
    return `${this._name}`;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
