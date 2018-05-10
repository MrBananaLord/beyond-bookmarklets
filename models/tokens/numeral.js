class Numeral extends Token {
  static canBeInstantiatedFrom(value) {
    return Number.isInteger(parseInt(value));
  }

  get type() {
    return 'number';
  }

  get toInt() {
    return parseInt(this.value);
  }

  mergableWith(otherToken) {
    return otherToken.number || otherToken.roll;
  }
}
