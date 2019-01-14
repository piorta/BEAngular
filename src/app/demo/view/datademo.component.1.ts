import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CuentaService } from '../service/cuentaservice';
import { NodeService } from '../service/nodeservice';
import { EventService } from '../service/eventservice';
import { Cuenta } from '../domain/cuenta';
import { TreeNode, SelectItem, LazyLoadEvent } from 'primeng/api';

@Component({
    templateUrl: './datademo.component.1.html',
    styles: [`
        .ui-dataview .search-icon {
            margin-top: 3em;
        }

        .ui-dataview .filter-container {
            text-align: center;
        }

        @media (max-width: 40em) {
            .ui-dataview .car-details, .ui-dataview .search-icon{
                text-align: center;
                margin-top: 0;
            }

            .ui-dataview .filter-container {
                text-align: left;
            }
        }
        .car-item {
            padding-top: 5px;
        }

        .car-item .ui-md-3 {
            text-align: center;
        }

        .car-item .ui-g-10 {
            font-weight: bold;
        }

        .empty-car-item-index {
            background-color: #f1f1f1;
            width: 60px;
            height: 60px;
            margin: 36px auto 0 auto;
            animation: pulse 1s infinite ease-in-out;
        }

        .empty-car-item-image {
            background-color: #f1f1f1;
            width: 120px;
            height: 120px;
            animation: pulse 1s infinite ease-in-out;
        }

        .empty-car-item-text {
            background-color: #f1f1f1;
            height: 18px;
            animation: pulse 1s infinite ease-in-out;
        }

        .title-container {
            padding: 1em;
            text-align: right;
        }

        .sort-container {
            text-align: left;
        }

        @media (max-width: 40em) {
            .car-item {
                text-align: center;
            }
            .index-col {
                display: none;
            }
            .image-col {
                display: none;
            }
        }
        @keyframes pulse {
            0% {
                background-color: rgba(165, 165, 165, 0.1)
            }
            50% {
                background-color: rgba(165, 165, 165, 0.3)
            }
            100% {
                background-color: rgba(165, 165, 165, 0.1)
            }
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class DataDemoComponent1 implements OnInit {

    cars1: Cuenta[];

    cars2: Cuenta[];

    cars3: Cuenta[];

    carsVirtual: Cuenta[] = [];

    cols: any[];

    cols2: any[];

    data: TreeNode[];

    selectedCuenta: Cuenta;

    sourceCars: Cuenta[];

    targetCars: Cuenta[];

    orderListCars: Cuenta[];

    carouselCars: Cuenta[];

    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    files4: TreeNode[];

    events: any[];

    selectedNode1: TreeNode;

    selectedNode2: TreeNode;

    selectedNode3: TreeNode;

    selectedNodes: TreeNode[];

    fullcalendarOptions: any;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    timeout: any;

    constructor(private cuentaService: CuentaService, private eventService: EventService, private nodeService: NodeService) {}

    ngOnInit() {
        this.cuentaService.getCarsSmall().then(cars => this.cars1 = cars);
        this.cols = [
            { field: 'cuenta', header: 'CUENTA' },
            { field: 'tipo', header: 'TIPO' },
            { field: 'estado', header: 'ESTADO' },
            { field: 'saldo', header: 'SALDO' }
        ];

        /*AQUI VAN LOS DATOS DE LA TABLA QUE SE CARGAN EN cuentaservice los datos vienen de la carpeta data*/
       

    }  
}
