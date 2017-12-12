import { Vehicle } from './vehicle.js';

export class Car extends Vehicle {
  constructor(license, model, latlong) {
    super(license, model, latlong);
    this.miles = null;
    this.make = null;
  }
}
