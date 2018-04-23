import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'tt-customer-profile',
    templateUrl: './customer-profile.component.html',
    styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
    customerId;

    constructor(private route: ActivatedRoute) {
        const params = route.params as any;
        this.customerId = params.getValue('id').id;
    }

    ngOnInit() {
        console.log(this, this.route);
    }


}
