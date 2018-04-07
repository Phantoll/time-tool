import {Component, OnInit} from '@angular/core';
import { JsonPipe } from '@angular/common';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Customer, CustomerModel} from "../../customer";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html'
})
export class CustomerCreateComponent implements OnInit {
    customer = new CustomerModel(null, {});
    submitted = false;

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
    }

    onSubmit(form) {
        this.submitted = true;
        console.log('fdsfd',form, this)

        if(!form || form.status !== 'VALID') return;

        this.activeModal.close({customer: this.customer});
    }

}
