'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  shift() {
    let returnValue = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
  }

  forEach(cb) {
    if (typeof cb !== 'function') {
      return undefined;
    }
    for (let i = 0; i < this.length; i++) {
      cb(this.data[i], i);
    }
  }

  map(cb) {
    if (typeof cb !== 'function') {
      return undefined;
    }
    const newData = {};
    for (let i = 0; i < this.length; i++) {
      newData[i] = cb(this.data[i], i);
    }
    this.data = newData;
    return this;
  }

  filter(cb) {
    if (typeof cb !== 'function') {
      return undefined;
    }
    let newLength = 0;
    const newData = {};
    for (let i = 0; i < this.length; i++) {
      if (cb(this.data[i], i)) {
        newData[newLength] = this.data[i];
        newLength++;
      }
    }
    this.length = newLength;
    this.data = newData;
    return this;
  }
  reduce(cb) {
    let acc = this.data[0];
    for (let i = 1; i < this.length; i++) {
      acc = cb(acc, this.data[i], i);
    }
    return acc;
  }
}

module.exports = List;
