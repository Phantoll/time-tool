import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


import {SailsRepository} from './sails.repository';

@Injectable()
export class RepositoryService {

    constructor(private http: HttpClient) {
    }

    create(resourceId: string, type = 'sales') {
        return new SailsRepository(resourceId, this.http);
    }
}
