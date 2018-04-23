import {assignIn} from 'lodash';

type GenderType = 'male' | 'female';

export interface Customer {
    forename?: string;
    surname: string;
    gender: GenderType;
}


export class CustomerModel implements Customer {
    public forename: string;
    public surname: string;
    public gender = 'male' as GenderType;

    constructor(customerData: object) {
        assignIn(this, customerData);


        console.log('sdasda',this, customerData);
    }
}
