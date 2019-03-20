'use strict';

const FlyingVehicle = () => ({
  fly: () => 'Moving Forward',
  stop: () => 'Stopping',
});

function Airplane(name) {
  let airplane = Object.assign({}, { name }, { wings: 2 }, FlyingVehicle(), { stop });
  function stop() {
    return false;
  }
  return Object.freeze(airplane);
}

function Helicopter(name) {
  let helicopter = Object.assign({}, { name }, { wings: 0 }, { hover }, FlyingVehicle());
  function hover() {
    return 'Chukchukchukchuk!';
  }

  return Object.freeze(helicopter);
}

module.exports = { Airplane, Helicopter };
