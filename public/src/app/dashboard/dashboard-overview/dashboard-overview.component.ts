import {Component, OnInit} from '@angular/core';
import {RepositoryService} from "../../shared/repository/repository.service";

@Component({
    selector: 'tt-dashboard-overview',
    templateUrl: './dashboard-overview.component.html',
    styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {

    public ticket = {
        lorem: '432343243ew252343232'
    };

    public users = []

    repository;
    constructor(repositoryService: RepositoryService) {
        this.repository = repositoryService.create('user');
    }

    ngOnInit() {
        this.repository.getRecord(1).subscribe((result) => {
            console.log('getRecord', result);
        });


        this.repository.getAll().subscribe((response) => {
            this.users = response;
        }, err => {
            console.log(err.message);
        }, () => {
            console.log('completed');
        });
    }

    doSubmit(...args) {
        console.log(args);
    }
}
