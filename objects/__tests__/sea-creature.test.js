'use strict';

// const SeaCreature = require('../sea-creature-constructor.js');
// const SeaCreature = require('../sea-creature-factory.js');
const SeaCreature = require('../sea-creature-class.js');

describe('SeaCreatures', () => {
  describe('Fish', () => {
    let fish = new SeaCreature.Fish('foo');

    it('has 8 fins', () => {
      expect(fish.fins).toEqual(8);
    });

    it('can swim', () => {
      expect(fish.swim()).toBeTruthy();
    });

    it('can hide', () => {
      expect(fish.hide()).toBeTruthy();
    });

    it('cannot pinch', () => {
      expect(fish.pinch).toBeFalsy();
    });
  });

  describe('Lobster', () => {
    let lobster = new SeaCreature.Lobster('foo');

    it('has 2 claws', () => {
      expect(lobster.claws).toEqual(2);
    });

    it('can swim', () => {
      expect(lobster.swim()).toBeTruthy();
    });

    it('can hide', () => {
      expect(lobster.hide()).toBeTruthy();
    });

    it('can pinch', () => {
      expect(lobster.pinch()).toBeTruthy();
    });
  });
});
