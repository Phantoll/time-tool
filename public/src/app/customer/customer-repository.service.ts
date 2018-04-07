import {Injectable} from '@angular/core';
import {LocalRepository} from './../shared/repository/local.repository';

@Injectable()
export class CustomerRepositoryService extends LocalRepository {
    constructor() {
        super('Customer');
    }
}


