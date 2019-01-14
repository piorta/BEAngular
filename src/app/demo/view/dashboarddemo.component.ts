import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/carservice';
import { Car } from '../domain/car';
import { MenuItem } from 'primeng/primeng';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardDemoComponent implements OnInit {

    cars: Car[];

    cols: any[];

    selectedCar: Car;

    items: MenuItem[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.items = [
            { label: 'Settings', icon: 'fa fa-cog' },
            { label: 'Sign Out', icon: 'fa fa-sign-out' },
        ];
    }
}
