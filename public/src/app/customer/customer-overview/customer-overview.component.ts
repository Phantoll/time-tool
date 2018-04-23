import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerCreateComponent} from './create/create.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {remove, find, uniqueId} from 'lodash/fp';
import {CustomerRepositoryService} from '../customer-repository.service';

@Component({
    selector: 'tt-customer-overview',
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
        this.setCustomerRecords();
    }

    open(customer: Customer) {
        const modalRef = this.modalService.open(CustomerCreateComponent);
        if (customer) modalRef.componentInstance.customer = customer;

        modalRef.result.then((result) => {
            this.repository
                .save(result.customer)
                .subscribe(this.setCustomerRecords);
        }, (reason) => {
        });

    }

    removeCustomer(customer) {
        this.repository.removeRecord(customer).subscribe(this.setCustomerRecords);
    }

    setCustomerRecords() {
        this.repository.getAll().subscribe((currentRecords) => this.customers = currentRecords);
    }

}
