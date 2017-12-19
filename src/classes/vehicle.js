export class Vehicle {
  constructor(license, model, latlong) {
    this.license = license;
    this.model = model;
    this.latlong  = latlong || '40.779423 -73.969411';
  }
}
