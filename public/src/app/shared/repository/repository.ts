export interface Repository {
    idProperty: string;
    // new(resourceId?: string): any;

    add(newRecord: any): any;
    getRecord(recordId: number | 'string'): any;
    getAll(): any;
    removeRecord(record: any): any;
}
