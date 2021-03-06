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
 * Remove an item from the end of the list and return it's value
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
/**
 * @param  {} cb
 * @param  {} {if(typeofcb!=='function'
 * @param  {} {returnundefined;}for(leti=0;i<this.length;i++
 * @param  {} {cb(this.data[i]
 * @param  {} i
 */
List.prototype.forEach = function(cb) {
  if (typeof cb !== 'function') {
    return undefined;
  }
  for (let i = 0; i < this.length; i++) {
    cb(this.data[i], i);
  }
};
/**
 * @param  {} cb
 * @param  {} {if(typeofcb!=='function'
 * @param  {} {returnundefined;}constnewData={};for(leti=0;i<this.length;i++
 * @param  {} {newData[i]=cb(this.data[i]
 * @param  {} i
 */
List.prototype.map = function(cb) {
  if (typeof cb !== 'function') {
    return undefined;
  }
  const newData = {};
  for (let i = 0; i < this.length; i++) {
    newData[i] = cb(this.data[i], i);
  }
  this.data = newData;
  return this;
};
/**
 * @param  {} cb
 * @param  {} {if(typeofcb!=='function'
 * @param  {} {returnundefined;}letnewLength=0;constnewData={};for(leti=0;i<this.length;i++
 * @param  {} {if(cb(this.data[i]
 * @param  {} i
 */
List.prototype.filter = function(cb) {
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
};
/**
 * @param  {} cb
 * @param  {} {if(typeofcb!=='function'
 * @param  {} {returnundefined;}letacc=this.data[0];for(leti=1;i<this.length;i++
 * @param  {} {acc=cb(acc
 * @param  {} this.data[i]
 * @param  {} i
 */
List.prototype.reduce = function(cb) {
  if (typeof cb !== 'function') {
    return undefined;
  }
  let acc = this.data[0];
  for (let i = 1; i < this.length; i++) {
    acc = cb(acc, this.data[i], i);
  }
  return acc;
};

module.exports = List;
