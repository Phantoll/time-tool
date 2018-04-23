import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {assignIn} from 'lodash';
import {SailsRepository} from "../shared/repository/sails.repository";

@Injectable()
export class CustomerRepositoryService extends SailsRepository{
    constructor(http: HttpClient) {
        super('customer', http);
    //     assignIn(this, repository.create('customer'));
    }
}


