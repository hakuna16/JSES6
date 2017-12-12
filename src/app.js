import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleetData.js';
import { FleetDataService } from './services/fleetDataService.js';

let dataService  = new FleetDataService();
dataService.loadData(fleet);

for (let car of dataService.cars) {
  console.log(car.license);
}
