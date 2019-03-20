'use strict';

const Vehicle = () => ({
  drive: () => 'Moving Forward',
  stop: () => 'Stopping',
});
/**
 * @param  {} name
 * @param  {} {letcar=Object.assign({}
 * @param  {} {name}
 * @param  {4}} {wheels
 * @param  {} Vehicle(
 * @param  {} ;returnObject.freeze(car
 */
function Car(name) {
  let car = Object.assign({}, { name }, { wheels: 4 }, Vehicle());
  return Object.freeze(car);
}
/**
 * @param  {} name
 * @param  {} {letmotorcycle=Object.assign({}
 * @param  {} {name}
 * @param  {2}} {wheels
 * @param  {} {wheelie}
 * @param  {} Vehicle(
 * @param  {} ;functionwheelie(
 * @param  {} {return'Wheee!';}returnObject.freeze(motorcycle
 */
function Motorcycle(name) {
  let motorcycle = Object.assign({}, { name }, { wheels: 2 }, { wheelie }, Vehicle());
  function wheelie() {
    return 'Wheee!';
  }

  return Object.freeze(motorcycle);
}

module.exports = { Car, Motorcycle };
