'use strict';
/**
 */
const SeaCreature = () => ({
  swim: () => 'Moving Forward',
  hide: () => 'Hiding...',
});
/**
 * @param  {} name
 * @param  {} {letfish=Object.assign({}
 * @param  {} {name}
 * @param  {8}} {fins
 * @param  {} SeaCreature(
 * @param  {} ;returnObject.freeze(fish
 */
function Fish(name) {
  let fish = Object.assign({}, { name }, { fins: 8 }, SeaCreature());
  return Object.freeze(fish);
}
/**
 * @param  {} name
 * @param  {} {letlobster=Object.assign({}
 * @param  {} {name}
 * @param  {2}} {claws
 * @param  {} {pinch}
 * @param  {} SeaCreature(
 * @param  {} ;functionpinch(
 * @param  {} {return'Ouch!';}returnObject.freeze(lobster
 */
function Lobster(name) {
  let lobster = Object.assign({}, { name }, { claws: 2 }, { pinch }, SeaCreature());
  function pinch() {
    return 'Ouch!';
  }

  return Object.freeze(lobster);
}

module.exports = { Fish, Lobster };
