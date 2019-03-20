'use strict';

// const FlyingVehicle = require('../flying-vehicle-constructor.js');
// const FlyingVehicle = require('../flying-vehicle-factory.js');
const FlyingVehicle = require('../flying-vehicle-class.js');

describe('FlyingVehicles', () => {
  describe('Airplane', () => {
    let airplane = new FlyingVehicle.Airplane('foo');

    it('has 2 wings', () => {
      expect(airplane.wings).toEqual(2);
    });

    it('can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });

    it('cannot stop', () => {
      expect(airplane.stop()).toBeFalsy();
    });
  });

  describe('Helicopter', () => {
    let helicopter = new FlyingVehicle.Helicopter('foo');

    it('has 0 wings', () => {
      expect(helicopter.wings).toEqual(0);
    });

    it('can fly', () => {
      expect(helicopter.fly()).toBeTruthy();
    });

    it('can stop', () => {
      expect(helicopter.stop()).toBeTruthy();
    });

    it('can hover', () => {
      expect(helicopter.hover()).toBeTruthy();
    });
  });
});
