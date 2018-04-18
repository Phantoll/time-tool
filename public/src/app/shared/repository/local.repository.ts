import {find, remove, maxBy} from 'lodash/fp';
import {Repository} from './repository';

export class LocalRepository implements Repository {
    protected records = [];
    public idProperty = 'id';


    constructor(private resourceId: string) {
        this.getAll().then((records) => {
            this.records = records;
        });
        return this;
    }

    add(newRecord) {
        if (!newRecord[this.idProperty]) newRecord[this.idProperty] = this.getNextId();

        this.records.push(newRecord);
        this.updateLocalStorage();

        return this.getAll();
    }

    getRecord(recordId) {
        return this.getAll().resolve((records) => {
            const isRecord = (record) => record[this.idProperty] === recordId;
            return find(records)(isRecord);
        });
    }

    getAll(): any {
        return new Promise((resolve) => {
            let StorageItem = JSON.parse(localStorage.getItem(this.resourceId));
            const result = StorageItem === null ? [] : StorageItem.records;
            resolve(result);
        });
    }

    removeRecord(record) {
        const isRecord = (records) => records[this.idProperty] === record[this.idProperty];
        this.records = remove(isRecord)(this.records);

        this.updateLocalStorage();
        return this.getAll()
    }


    private updateLocalStorage() {
        localStorage.setItem(this.resourceId, JSON.stringify({records: this.records}));
    }

    private getNextId() {
        const getRecordId = (record) => record[this.idProperty];
        let maxRecord = maxBy(getRecordId)(this.records) || 0;
        return maxRecord[this.idProperty] + 1;
    }
}

