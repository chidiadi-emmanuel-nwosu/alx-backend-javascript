export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = Object.create(Object.getPrototypeOf(this));
    const properties = Object.getOwnPropertyNames(this);
    properties.forEach((property) => { clone[property] = undefined; });
    return clone;
  }
}
