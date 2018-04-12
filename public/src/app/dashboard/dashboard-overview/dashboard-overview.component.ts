import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'tt-dashboard-overview',
    templateUrl: './dashboard-overview.component.html',
    styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {

    public ticket = {
        lorem: '432343243ew252343232'
    };

    constructor() {
    }

    ngOnInit() {
    }

    doSubmit(...args) {
        console.log(args);
    }
}
