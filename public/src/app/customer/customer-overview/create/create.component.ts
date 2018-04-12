import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CustomerModel} from '../../customer';

@Component({
    selector: 'tt-create',
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
        if (!form || form.status !== 'VALID') return;

        this.activeModal.close({customer: this.customer});
    }

}
