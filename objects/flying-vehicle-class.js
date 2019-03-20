'use strict';

class FlyingVehicle {
  constructor(name, wings) {
    this.name = name;
    this.wings = wings;
  }
  fly() {
    return 'Moving Forward';
  }
  stop() {
    return 'Stopping';
  }
}

class Airplane extends FlyingVehicle {
  constructor(name) {
    super(name);
    this.wings = 2;
  }
  stop() {
    return false;
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super(name);
    this.wings = 0;
  }
  hover() {
    return 'Chukchukchukchuk!';
  }
}

module.exports = { Airplane, Helicopter };
