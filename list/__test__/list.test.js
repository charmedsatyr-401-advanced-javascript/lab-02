'use strict';

// These 2 should be interchangeable!
const List = require('../list-class.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {
  /**
   * @param  {} 'startswithalengthof-1andanemptydataset'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;expect(stuff.length
   * @param  {} .toEqual(0
   * @param  {} ;expect(stuff.data
   * @param  {} .toEqual({}
   * @param  {} ;}
   */
  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });
  /**
   * @param  {} 'push(item
   * @param  {} pushesitemstotheendofthedataset'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.push('a'
   * @param  {} ;stuff.push('b'
   * @param  {} ;expect(stuff.length
   * @param  {} .toEqual(2
   * @param  {} ;expect(stuff.data[1]
   * @param  {} .toEqual('b'
   * @param  {} ;}
   */
  it('push(item) pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });
  /**
   * @param  {} 'push(item
   * @param  {} requiresanargument'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;expect(stuff.push(
   * @param  {} .toBeUndefined(
   * @param  {} ;}
   */
  it('push(item) requires an argument', () => {
    let stuff = new List();
    expect(stuff.push()).toBeUndefined();
  });
  /**
   * @param  {} 'pop(
   * @param  {} removesitemsofftheendofthedataset'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.data[0]='a';stuff.length++;stuff.data[1]='b';stuff.length++;stuff.pop(
   * @param  {} ;stuff.pop(
   * @param  {} ;expect(stuff.length
   * @param  {} .toEqual(0
   * @param  {} ;expect(stuff.data
   * @param  {} .toEqual({}
   * @param  {} ;}
   */
  it('pop() removes items off the end of the data set', () => {
    let stuff = new List();
    stuff.data[0] = 'a';
    stuff.length++;
    stuff.data[1] = 'b';
    stuff.length++;
    stuff.pop();
    stuff.pop();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });
  /**
   * @param  {} 'unshift(item
   * @param  {} addsitemstothebeginningofthedataset'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.unshift('a'
   * @param  {} ;stuff.unshift('b'
   * @param  {} ;expect(stuff.length
   * @param  {} .toEqual(2
   * @param  {} ;expect(stuff.data[1]
   * @param  {} .toEqual('a'
   * @param  {} ;}
   */
  it('unshift(item) adds items to the beginning of the data set', () => {
    let stuff = new List();
    stuff.unshift('a');
    stuff.unshift('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('a');
  });
  /**
   * @param  {} 'unshift(item
   * @param  {} requiresanargument'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;expect(stuff.unshift(
   * @param  {} .toBeUndefined(
   * @param  {} ;}
   */
  it('unshift(item) requires an argument', () => {
    let stuff = new List();
    expect(stuff.unshift()).toBeUndefined();
  });
  /**
   * @param  {} 'shift(
   * @param  {} removesanitemfromthebeginningofthedataset'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.data[0]='a';stuff.length++;stuff.data[1]='b';stuff.length++;stuff.shift(
   * @param  {} ;expect(stuff.length
   * @param  {} .toEqual(1
   * @param  {} ;expect(stuff.data
   * @param  {'b'}} .toEqual({0
   */
  it('shift() removes an item from the beginning of the data set', () => {
    let stuff = new List();
    stuff.data[0] = 'a';
    stuff.length++;
    stuff.data[1] = 'b';
    stuff.length++;
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data).toEqual({ 0: 'b' });
  });
  /**
   * @param  {} 'shift(
   * @param  {} returnsthevalueofthefirstiteminthedataset'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.data[0]='a';stuff.length++;stuff.data[1]='b';stuff.length++;expect(stuff.shift(
   * @param  {} .toEqual('a'
   * @param  {} ;}
   */
  it('shift() returns the value of the first item in the data set', () => {
    let stuff = new List();
    stuff.data[0] = 'a';
    stuff.length++;
    stuff.data[1] = 'b';
    stuff.length++;
    expect(stuff.shift()).toEqual('a');
  });
  /**
   * @param  {} 'forEach(cb
   * @param  {} executesacallbackforEachiteminthedataset'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.data[0]='a';stuff.length++;stuff.data[1]='b';stuff.length++;constarr=[];constcb=item=>arr.push(item
   * @param  {} ;stuff.forEach(cb
   * @param  {} ;expect(arr
   * @param  {} .toEqual(['a'
   * @param  {} 'b']
   * @param  {} ;}
   */
  it('forEach(cb) executes a callback forEach item in the data set', () => {
    let stuff = new List();
    stuff.data[0] = 'a';
    stuff.length++;
    stuff.data[1] = 'b';
    stuff.length++;
    const arr = [];
    const cb = item => arr.push(item);
    stuff.forEach(cb);
    expect(arr).toEqual(['a', 'b']);
  });
  /**
   * @param  {} 'forEach(cb
   * @param  {} requiresacallbackfunction'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;expect(stuff.forEach(
   * @param  {} .toBeUndefined(
   * @param  {} ;}
   */
  it('forEach(cb) requires a callback function', () => {
    let stuff = new List();
    expect(stuff.forEach()).toBeUndefined();
  });
  /**
   * @param  {} 'map(cb
   * @param  {} executesacallbackoneachiteminthedatasetandreturnsanewsetoftheresults'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.data[0]=1;stuff.length++;stuff.data[1]=2;stuff.length++;constcb=(el
   * @param  {} i
   * @param  {} =>el+i;expect(stuff.map(cb
   * @param  {2} .toEqual({length
   * @param  {{0:1} data
   * @param  {3}}} 1
   */
  it('map(cb) executes a callback on each item in the data set and returns a new set of the results', () => {
    let stuff = new List();
    stuff.data[0] = 1;
    stuff.length++;
    stuff.data[1] = 2;
    stuff.length++;
    const cb = (el, i) => el + i;
    expect(stuff.map(cb)).toEqual({ length: 2, data: { 0: 1, 1: 3 } });
  });
  /**
   * @param  {} 'map(cb
   * @param  {} requiresacallbackfunction'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;expect(stuff.map(
   * @param  {} .toBeUndefined(
   * @param  {} ;}
   */
  it('map(cb) requires a callback function', () => {
    let stuff = new List();
    expect(stuff.map()).toBeUndefined();
  });
  /**
   * @param  {} 'filter(cb
   * @param  {} executesacallbackoneachiteminthedatasetandreturnsanewsetofallitemsthatreturnedtruthy'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.data[0]=1;stuff.length++;stuff.data[1]=2;stuff.length++;constcb=el=>el%2===0;expect(stuff.filter(cb
   * @param  {1} .toEqual({length
   * @param  {{0:2}}} data
   */
  it('filter(cb) executes a callback on each item in the data set and returns a new set of all items that returned truthy', () => {
    let stuff = new List();
    stuff.data[0] = 1;
    stuff.length++;
    stuff.data[1] = 2;
    stuff.length++;
    const cb = el => el % 2 === 0;
    expect(stuff.filter(cb)).toEqual({ length: 1, data: { 0: 2 } });
  });
  /**
   * @param  {} 'filter(cb
   * @param  {} requiresacallbackfunction'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;expect(stuff.filter(
   * @param  {} .toBeUndefined(
   * @param  {} ;}
   */
  it('filter(cb) requires a callback function', () => {
    let stuff = new List();
    expect(stuff.filter()).toBeUndefined();
  });
  /**
   * @param  {} 'reduce(cb
   * @param  {} executesacallbackagainstanacculmulatorandeachiteminthedatasetandreturnsasingleitem'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;stuff.data[0]=1;stuff.length++;stuff.data[1]=2;stuff.length++;constcb=(acc
   * @param  {} curr
   * @param  {} =>acc+curr;expect(stuff.reduce(cb
   * @param  {} .toEqual(3
   * @param  {} ;}
   */
  it('reduce(cb) executes a callback against an acculmulator and each item in the data set and returns a single item', () => {
    let stuff = new List();
    stuff.data[0] = 1;
    stuff.length++;
    stuff.data[1] = 2;
    stuff.length++;
    const cb = (acc, curr) => acc + curr;
    expect(stuff.reduce(cb)).toEqual(3);
  });
  /**
   * @param  {} 'reduce(cb
   * @param  {} requiresacallbackfunction'
   * @param  {} (
   * @param  {} =>{letstuff=newList(
   * @param  {} ;expect(stuff.reduce(
   * @param  {} .toBeUndefined(
   * @param  {} ;}
   */
  it('reduce(cb) requires a callback function', () => {
    let stuff = new List();
    expect(stuff.reduce()).toBeUndefined();
  });
});
