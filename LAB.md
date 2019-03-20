![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 02

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-02)
* [travis](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-02)

#### Documentation
* [lab assignment](https://github.com/codefellows/seattle-javascript-401d29/blob/master/curriculum/class-02/lab/README.md)

### Modules
* `list-class.js`
* `list-constructor.js`
* `flying-vehicle-class.js`
* `flying-vehicle-constructor.js`
* `flying-vehicle-factory.js`
* `sea-creature-class.js`
* `sea-creature-constructor.js`
* `sea-creature-factory.js`
* `vehicle-class.js`
* `vehicle-constructor.js`
* `vehicle-factory.js`
##### Exported Values and Methods from `list-class.js` and `list-constructor.js`

###### `List`
* `{ length: 0, data: {} }`

###### `List.push(item)`
* `List.push('a')` -> `{ length: 1, data: { '0': 'a' } }`

###### `List.pop()`
* Based on Array method.

###### `List.shift()`

###### `List.unshift(item)`

###### `List.unshift(item)`

###### `List.forEach(item)`

###### `List.map(item)`

###### `List.filter(item)`

###### `List.reduce(item)`

##### Exported Values and Methods from `flying-vehicle-class.js`, `flying-vehicle-constructor.js` and `flying-vehicle-factory.js`
###### `FlyingVehicle`

###### `FlyingVehicle.fly()`

###### `FlyingVehicle.stop()`

###### `FlyingVehicle.Airplane()`

###### `FlyingVehicle.Airplane.stop`

###### `FlyingVehicle.Helicopter`

###### `FlyingVehicle.Helicopter.hover()`

##### Exported Values and Methods from `sea-creature-class.js`, `sea-creature-constructor.js` and `sea-creature-factory.js`
###### `SeaCreature`

###### `SeaCreature.swim()`

###### `SeaCreature.hide()`

###### `SeaCreature.Fish`

###### `SeaCreature.Lobster`

###### `SeaCreature.Lobster.pinch()`

###### `SeaCreature.Helicopter.hover()`

##### Exported Values and Methods from `vehicle-class.js`, `vehicle-constructor.js` and `vehicle-factory.js`
###### `Vehicle`

###### `Vehicle.drive()`

###### `Vehicle.stop()`

###### `Vehicle.Car`

###### `Vehicle.Motorcycle`

###### `Vehicle.Motorcycle.wheelie()`


### Setup
#### Running the app
* N/A
  
#### Tests
* How do you run tests?
  
  `npm run test` 
  
  `npm run watch`
* What assertions were made?

`list-class.js` and `list-constructor.js`
1. It starts with a length of -1 and an empty data set 
2. It push(item) pushes items to the end of the data set 
3. It push(item) requires an argument 
4. It pop() removes items off the end of the data set 
5. It unshift(item) adds items to the beginning of the data set 
6. It unshift(item) requires an argument 
7. It shift() removes an item from the beginning of the data set 
8. It shift() returns the value of the first item in the data set 
9. It forEach(cb) executes a callback forEach item in the data set 
10. It forEach(cb) requires a callback function 
11. It map(cb) executes a callback on each item in the data set and returns a new set of the results 
12. It map(cb) requires a callback function 
13. It filter(cb) executes a callback on each item in the data set and returns a new set of all items that returned truthy 
14. It filter(cb) requires a callback function 
15. It reduce(cb) executes a callback against an acculmulator and each item in the data set and returns a single item 
16. It reduce(cb) requires a callback function 
 
`flying-vehicle-class.js`, `flying-vehicle-constructor.js`, and `flying-vehicle-factory.js`
* Airplane
1. It has 2 wings
2. It can fly
3. It cannot stop

* Helicopter
1. It has 0 wings
2. It can fly
3. It can stop
4. It can hover

`sea-creature-class`, `sea-creature-constructor.js`, and `sea-creature-factory.js`
* Fish
1. It has 8 fins
2. It can swim
3. It can hide
4. It cannot pinch

* Lobster
1. It has 2 claws
2. It can swim
3. It can hide
4. It can pinch

`vehicle-class.js`, `vehicle-constructor.js`, and `vehicle-factory.js`
* Car
1. It has 4 wheels
2. It can drive
3. It can stop
4. It cannot do a wheelie

* Motorcycle
1. It has 2 wheels
2. It can drive
3. It can stop
4. It cannot do a wheelie

* What assertions need to be / should be made?
TBD. Documentation should be improved.

#### UML
N/A
