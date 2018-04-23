export interface Repository {
    idProperty: string;
    // new(resourceId?: string): any;

    save(newRecord: any): any;
    getRecord(recordId: number | 'string'): any;
    getAll(): any;
    removeRecord(record: any): any;
}
