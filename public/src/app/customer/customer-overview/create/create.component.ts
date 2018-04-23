import {Component, OnInit, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Customer, CustomerModel} from '../../customer';

@Component({
    selector: 'tt-create',
    templateUrl: './create.component.html'
})
export class CustomerCreateComponent implements OnInit {

    @Input() customer: Customer;

    submitted = false;

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        if (!this.customer) this.customer = new CustomerModel({});
        console.log(this.customer);
        console.log(this.activeModal);
    }

    onSubmit(form) {
        this.submitted = true;
        if (!form || form.status !== 'VALID') return;

        this.activeModal.close({customer: this.customer});
    }

}
