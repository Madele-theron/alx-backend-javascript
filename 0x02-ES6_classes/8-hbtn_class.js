export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  //  cast to a number
  valueOf() {
    return this._size;
  }

  //   cast to a string
  toString() {
    return this._location;
  }
}
