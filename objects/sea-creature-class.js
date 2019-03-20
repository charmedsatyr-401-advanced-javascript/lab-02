'use strict';

class SeaCreature {
  constructor(name, fins) {
    this.name = name;
    this.fins = fins;
  }
  /**
   */
  swim() {
    return 'Moving Forward';
  }
  /**
   */
  hide() {
    return 'Hiding...';
  }
}

class Fish extends SeaCreature {
  constructor(name) {
    super(name);
    this.fins = 8;
  }
}

class Lobster extends SeaCreature {
  constructor(name) {
    super(name);
    this.claws = 2;
  }
  /**
   */
  pinch() {
    return 'Ouch!';
  }
}

module.exports = { Fish, Lobster };
