import {omit, isNil} from 'lodash/fp';
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

    save(record) {
        if (isNil(record[this.idProperty])) delete record[this.idProperty];
        return record[this.idProperty] ? this.updateRecord(record) : this.createRecord(record);
    }

    getRecord(recordId) {
        const url = `${baseURL}/${this.resourceId}/find?${this.idProperty}=${recordId}`;
        return this.http.get(url, httpOptions);
    }

    getAll(): any {
        return this.http.get(this.getBaseUrl(), httpOptions);
    }

    removeRecord(record) {
        return this.http.delete(this.getBaseUrl(record[this.idProperty]));
    }

    private createRecord(record) {
        return this.http.post(this.getBaseUrl(), record, httpOptions);
    }

    private updateRecord(record) {
        return this.http.put(this.getBaseUrl(record[this.idProperty]), record, httpOptions);
    }

    private getBaseUrl(recordId = null) {
        let base = `${baseURL}/${this.resourceId}`;
        if (recordId) base += `/${recordId}`;
        return base;
    }
}

