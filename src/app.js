import { Car } from './classes/car.js';
import { Drone } from './classes/drone.js';
import { fleet } from './fleetData.js';
import { FleetDataService } from './services/fleetDataService.js';
import $ from 'jquery';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/titleBar.js';
import { DataTable } from './ui/dataTable.js';

let headers = 'License Make Model Miles'.split(' ');
let dataService = new FleetDataService();
dataService.loadData(fleet);

let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));
