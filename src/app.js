import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleetData.js';
import { FleetDataService } from './services/fleetDataService.js';
import $ from 'jquery';
import { Button } from './ui/button.js';

let b = new Button('Click Me');
b.appendToElement($('body'));
