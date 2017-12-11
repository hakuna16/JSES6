class Vehicle {
  constructor () {
    console.log('constructor from vehcile');
  }
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
  constructor () {
    super();
    console.log('constructor from Car');
  }
}

let c = new Car();
console.log(c instanceof Object);	//true
console.log(c instanceof Vehicle);	//true
