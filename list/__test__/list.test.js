'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {
  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('push(item) pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });
  it('push(item) requires an argument', () => {
    let stuff = new List();
    expect(stuff.push()).toBeUndefined();
  });

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

  it('unshift(item) adds items to the beginning of the data set', () => {
    let stuff = new List();
    stuff.unshift('a');
    stuff.unshift('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('a');
  });
  it('unshift(item) requires an argument', () => {
    let stuff = new List();
    expect(stuff.unshift()).toBeUndefined();
  });
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
  it('shift() returns the value of the first item in the data set', () => {
    let stuff = new List();
    stuff.data[0] = 'a';
    stuff.length++;
    stuff.data[1] = 'b';
    stuff.length++;
    expect(stuff.shift()).toEqual('a');
  });

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
  it('forEach(cb) requires a callback function', () => {
    let stuff = new List();
    expect(stuff.forEach()).toBeUndefined();
  });

  it('map(cb) executes a callback on each item in the data set and returns a new set of the results', () => {
    let stuff = new List();
    stuff.data[0] = 1;
    stuff.length++;
    stuff.data[1] = 2;
    stuff.length++;
    const cb = (el, i) => el + i;
    expect(stuff.map(cb)).toEqual({ length: 2, data: { 0: 1, 1: 3 } });
  });

  it('map(cb) requires a callback function', () => {
    let stuff = new List();
    expect(stuff.map()).toBeUndefined();
  });

  it('filter(cb) executes a callback on each item in the data set and returns a new set of all items that returned truthy', () => {
    let stuff = new List();
    stuff.data[0] = 1;
    stuff.length++;
    stuff.data[1] = 2;
    stuff.length++;
    const cb = el => el % 2 === 0;
    expect(stuff.filter(cb)).toEqual({ length: 1, data: { 0: 2 } });
  });
  it('filter(cb) requires a callback function', () => {
    let stuff = new List();
    expect(stuff.filter()).toBeUndefined();
  });

  it('reduce(cb) executes a callback against an acculmulator and each item in the data set and returns a single item', () => {
    let stuff = new List();
    stuff.data[0] = 1;
    stuff.length++;
    stuff.data[1] = 2;
    stuff.length++;
    const cb = (acc, curr) => acc + curr;
    expect(stuff.reduce(cb)).toEqual(3);
  });
  it('reduce(cb) requires a callback function', () => {
    let stuff = new List();
    expect(stuff.reduce()).toBeUndefined();
  });
});
