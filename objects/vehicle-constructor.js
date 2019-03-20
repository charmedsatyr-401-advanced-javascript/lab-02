'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};
/**
 */
Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};
/**
 */
Vehicle.prototype.stop = () => {
  return 'Stopping';
};
/**
 * @param  {} name
 * @param  {} {Vehicle.call(this
 * @param  {} name
 * @param  {} 4
 */
// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();
/**
 * @param  {} name
 * @param  {} {Vehicle.call(this
 * @param  {} name
 * @param  {} 2
 */
const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();
/**
 */
Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

module.exports = {Car, Motorcycle};
