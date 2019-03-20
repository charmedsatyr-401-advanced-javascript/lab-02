'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

/**
 * Remove an item from the beginning of the list and return its value
 * @returns {*}
 */
List.prototype.shift = function() {
  let returnValue = this.data[0];
  for (let i = 0; i < this.length; i++) {
    this.data[i] = this.data[i + 1];
  }
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

/**
 * Add item to the beginning of the list
 * @param item
 */
List.prototype.unshift = function(item) {
  for (let i = this.length; i > 0; i--) {
    this.data[i] = this.data[i - 1];
  }
  this.data[0] = item;
  this.length++;
};

List.prototype.forEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this.data[i], i);
  }
};

List.prototype.map = function(cb) {
  if (!cb) {
    return;
  }
  const newData = {};
  for (let i = 0; i < this.length; i++) {
    newData[i] = cb(this.data[i], i);
  }
  this.data = newData;
  return this;
};

List.prototype.filter = function(cb) {
  if (!cb) {
    return;
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
};

List.prototype.reduce = function(cb) {
  let acc = this.data[0];
  for (let i = 1; i < this.length; i++) {
    acc = cb(acc, this.data[i], i);
  }
  return acc;
};

module.exports = List;
