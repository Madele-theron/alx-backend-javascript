export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  // override the default toString() method and returns [object <_code>].

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
