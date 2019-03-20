'use strict';

const SeaCreature = () => ({
  swim: () => 'Moving Forward',
  hide: () => 'Hiding...',
});

function Fish(name) {
  let fish = Object.assign({}, { name }, { fins: 8 }, SeaCreature());
  return Object.freeze(fish);
}

function Lobster(name) {
  let lobster = Object.assign({}, { name }, { claws: 2 }, { pinch }, SeaCreature());
  function pinch() {
    return 'Ouch!';
  }

  return Object.freeze(lobster);
}

module.exports = { Fish, Lobster };
