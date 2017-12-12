import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { fleet } from '../fleetData.js';
import { DataError } from './dataError.js';

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case 'car':
          if (this.validateCarData(data)) {
            let car = this.loadCar(data);
            if (car) {
              this.cars.push(car);
            }
          }else {
            let e  = new DataError('Invalid data', data);
            this.errors.push(e);
          }

          break;
        case 'drone':
          this.drones.push(data);
          break;
        default:
          let e = new DataError('Invalid vehcile type', data);
          this.errors.push(e);
          break;
      }
    }
  }

  loadCar(car) {
    let c = new Car(car.license, car.model, car.latlong);
    c.mles = car.miles;
    c.make = car.make;
    return c;
  }

  validateCarData(car) {
    let requiredProps = 'license model latlong miles make'.split(' ');
    let hasErrors = false;

    for (let field of requiredProps) {
      if (!car[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, car));
        hasErrors = true;
      }
    }

    if (Number.isNaN(Number.parselFloat(car.miles))) {
      this.errors.push(new DataError('Invalid mileage', car));
      hasErrors = true;
    }
  }
}
