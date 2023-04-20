export default class Building {
  constructor(sqft) {
    if (!this.evacuationWarningMessage && Object.getPrototypeOf(this)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    // if (Object.getPrototypeOf(this) !== Building.prototype && !this.evacuationWarningMessage) {
    //   throw new Error('Class extending Building must override evacuationWarningMessage');
    // }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft should be a number');
    }
    this._sqft = sqft;
  }
}
