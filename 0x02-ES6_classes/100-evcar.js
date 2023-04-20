import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // instead of returning this, return the Car class.
  static get [Symbol.species]() {
    return Car;
  }
}
