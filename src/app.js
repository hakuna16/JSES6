import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleetData.js';
import { FleetDataService } from './services/fleetDataService.js';

let dataService  = new FleetDataService();
dataService.loadData(fleet);

console.log(dataService.cars);
console.log(dataService.drones);
