import {Component, OnInit} from '@angular/core';
import {Customer} from "../customer";
import {CustomerCreateComponent} from './create/create.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {remove, find, uniqueId} from 'lodash/fp'
import {CustomerRepositoryService} from "../customer-repository.service";

@Component({
    selector: 'app-customer-overview',
    templateUrl: './customer-overview.component.html',
    styleUrls: ['./customer-overview.component.scss']
})
export class CustomerOverviewComponent implements OnInit {
    customers: Customer[] = [];

    constructor(
        private modalService: NgbModal,
        private repository: CustomerRepositoryService
    ) {

        this.setCustomerRecords = this.setCustomerRecords.bind(this);
    }

    ngOnInit() {
        this.repository.getAll().then(this.setCustomerRecords);
    }

    open() {
        this.modalService.open(CustomerCreateComponent).result.then((result) => {
            this.repository.add(result.customer).then(this.setCustomerRecords);
        }, (reason) => {
        });
    }

    removeCustomer(customer) {
        this.repository.removeRecord(customer).then(this.setCustomerRecords);
    }

    setCustomerRecords(currentRecords) {
        this.customers = currentRecords
    }

}
