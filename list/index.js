'use strict';

// const List = require('./list-constructor.js');
const List = require('./list-class.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
let last = stuff.pop();
console.log(last);
