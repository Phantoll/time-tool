import {find, remove, maxBy} from 'lodash/fp';
import {Repository} from './repository';
import {HttpHeaders, HttpClient} from '@angular/common/http';

const baseURL = 'http://localhost:1337';

const httpOptions = {
    headers: new HttpHeaders({
        // 'Authorization':'authkey',
        // 'userid':'1'
    })
};


export class SailsRepository implements Repository {
    protected records = [];
    public idProperty = 'id';


    constructor(private resourceId: string, private http: HttpClient) {
    }

    add(newRecord) {
    }

    getRecord(recordId) {
        return this.getAll().resolve((records) => {
            const isRecord = (record) => record[this.idProperty] === recordId;
            return find(records)(isRecord);
        });
    }

    getAll(): any {
        const url = `${baseURL}/${this.resourceId}`;
        console.log(url);
        return this.http.get(url, httpOptions);
    }

    removeRecord(record) {
    }
}

