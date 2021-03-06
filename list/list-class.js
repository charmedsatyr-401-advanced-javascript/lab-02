'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  /**
   * @param  {} item
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  /**
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }
  /**
   * @param  {} {letreturnValue=this.data[0];for(leti=0;i<this.length;i++
   * @returns {*}
   */
  shift() {
    let returnValue = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }
  /**
   * @param  {} item
   * @param  {} {for(leti=this.length;i>0;i--
   */
  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
  }
  /**
   * @param  {} cb
   * @param  {} {if(typeofcb!=='function'
   * @param  {} {returnundefined;}for(leti=0;i<this.length;i++
   * @param  {} {cb(this.data[i]
   * @param  {} i
   */
  forEach(cb) {
    if (typeof cb !== 'function') {
      return undefined;
    }
    for (let i = 0; i < this.length; i++) {
      cb(this.data[i], i);
    }
  }
  /**
   * @param  {} cb
   * @param  {} {if(typeofcb!=='function'
   * @param  {} {returnundefined;}constnewData={};for(leti=0;i<this.length;i++
   * @param  {} {newData[i]=cb(this.data[i]
   * @param  {} i
   * @returns {object}
   */
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
  /**
   * @param  {} cb
   * @param  {} {if(typeofcb!=='function'
   * @param  {} {returnundefined;}letnewLength=0;constnewData={};for(leti=0;i<this.length;i++
   * @param  {} {if(cb(this.data[i]
   * @param  {} i
   * @returns {object}
   */
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
 
  /**
   * @param  {} cb
   * @param  {} {letacc=this.data[0];for(leti=1;i<this.length;i++
   * @param  {} {acc=cb(acc
   * @param  {} this.data[i]
   * @param  {} i
   * @returns {*}
   */
  reduce(cb) {
    let acc = this.data[0];
    for (let i = 1; i < this.length; i++) {
      acc = cb(acc, this.data[i], i);
    }
    return acc;
  }
}

module.exports = List;
