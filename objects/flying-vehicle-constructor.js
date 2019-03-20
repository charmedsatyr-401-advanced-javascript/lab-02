'use strict';

const FlyingVehicle = function(name, wings) {
  this.name = name;
  this.wings = wings;
};

FlyingVehicle.prototype.fly = () => {
  return 'Moving Forward';
};

FlyingVehicle.prototype.stop = () => {
  return 'Stopping';
};

// Airplane Constructor
const Airplane = function(name) {
  FlyingVehicle.call(this, name, 2);
};

Airplane.prototype = new FlyingVehicle();
Airplane.prototype.stop = () => {
  return false;
};

const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 0);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.hover = () => {
  return 'Chukchukhcuk!';
};

module.exports = { Airplane, Helicopter };
