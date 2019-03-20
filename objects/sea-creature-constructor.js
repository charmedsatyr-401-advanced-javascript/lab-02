'use strict';
/**
 * @param  {} name
 * @param  {} fins
 */
const SeaCreature = function(name, fins) {
  this.name = name;
  this.fins = fins;
};
/**
 */
SeaCreature.prototype.swim = () => {
  return 'Moving Forward';
};
/**
 */
SeaCreature.prototype.hide = () => {
  return 'Hiding...';
};
/**
 * @param  {} name
 * @param  {} {SeaCreature.call(this
 * @param  {} name
 * @param  {} 8
 */
// Fish Constructor
const Fish = function(name) {
  SeaCreature.call(this, name, 8);
};

Fish.prototype = new SeaCreature();
/**
 * @param  {} name
 * @param  {} {SeaCreature.call(this
 * @param  {} name
 * @param  {} 0
 */
const Lobster = function(name) {
  SeaCreature.call(this, name, 0);
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.claws = 2;
/**
 */
Lobster.prototype.pinch = () => {
  return 'Ouch!';
};

module.exports = { Fish, Lobster };
