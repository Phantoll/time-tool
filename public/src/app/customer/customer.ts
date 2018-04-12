import {assignIn} from 'lodash';

export interface Customer {
    forename: string;
    surname: string;
    gender: 'male' | 'female';
}


export class CustomerModel implements Customer{
    public forename: string;
    public surname: string;
    public gender: 'male';
    constructor(
        public id: number,
        customerData: object
    ) {
        assignIn(this, customerData);
    }
}
