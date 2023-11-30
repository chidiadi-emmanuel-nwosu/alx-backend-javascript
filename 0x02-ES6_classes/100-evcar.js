import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const { brand, motor, color } = this;
    const clone = new Car(brand, motor, color);
    Object.keys(clone).forEach((key) => { clone[key] = undefined; });
    return clone;
  }
}
