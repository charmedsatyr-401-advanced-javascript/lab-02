'use strict';

const SeaCreature = function(name, fins) {
  this.name = name;
  this.fins = fins;
};

SeaCreature.prototype.swim = () => {
  return 'Moving Forward';
};

SeaCreature.prototype.hide = () => {
  return 'Hiding...';
};

// Fish Constructor
const Fish = function(name) {
  SeaCreature.call(this, name, 8);
};

Fish.prototype = new SeaCreature();

const Lobster = function(name) {
  SeaCreature.call(this, name, 0);
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.claws = 2;

Lobster.prototype.pinch = () => {
  return 'Ouch!';
};

module.exports = { Fish, Lobster };
