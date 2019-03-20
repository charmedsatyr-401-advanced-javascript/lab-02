'use strict';

const FlyingVehicle = function(name, wings) {
  this.name = name;
  this.wings = wings;
};
/**
 */
FlyingVehicle.prototype.fly = () => {
  return 'Moving Forward';
};
/**
 */
FlyingVehicle.prototype.stop = () => {
  return 'Stopping';
};

// Airplane Constructor
/**
 * @param  {} name
 * @param  {} {FlyingVehicle.call(this
 * @param  {} name
 * @param  {} 2
 */
const Airplane = function(name) {
  FlyingVehicle.call(this, name, 2);
};

Airplane.prototype = new FlyingVehicle();
/**
 */
Airplane.prototype.stop = () => {
  return false;
};
/**
 * @param  {} name
 * @param  {} {FlyingVehicle.call(this
 * @param  {} name
 * @param  {} 0
 */
const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 0);
};

Helicopter.prototype = new FlyingVehicle();
/**
 */
Helicopter.prototype.hover = () => {
  return 'Chukchukhcuk!';
};

module.exports = { Airplane, Helicopter };
