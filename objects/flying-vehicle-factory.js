'use strict';

const FlyingVehicle = () => ({
  fly: () => 'Moving Forward',
  stop: () => 'Stopping',
});
/**
 * @param  {} name
 * @param  {} {letairplane=Object.assign({}
 * @param  {} {name}
 * @param  {2}} {wings
 * @param  {} FlyingVehicle(
 * @param  {} {stop}
 * @param  {} ;functionstop(
 * @param  {} {returnfalse;}returnObject.freeze(airplane
 */
function Airplane(name) {
  let airplane = Object.assign({}, { name }, { wings: 2 }, FlyingVehicle(), { stop });
  function stop() {
    return false;
  }
  return Object.freeze(airplane);
}
/**
 * @param  {} name
 * @param  {} {lethelicopter=Object.assign({}
 * @param  {} {name}
 * @param  {0}} {wings
 * @param  {} {hover}
 * @param  {} FlyingVehicle(
 * @param  {} ;functionhover(
 * @param  {} {return'Chukchukchukchuk!';}returnObject.freeze(helicopter
 */
function Helicopter(name) {
  let helicopter = Object.assign({}, { name }, { wings: 0 }, { hover }, FlyingVehicle());
  function hover() {
    return 'Chukchukchukchuk!';
  }

  return Object.freeze(helicopter);
}

module.exports = { Airplane, Helicopter };
