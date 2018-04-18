import {Component, Input} from '@angular/core';
import {map, assignIn} from 'lodash';

@Component({
    selector: 'tt-field-abstract',
    templateUrl: './field-abstract.component.html',
    styleUrls: ['./field-abstract.component.scss']
})
export class FieldAbstractComponent {
    @Input() label;
    @Input() fieldInstance;
    @Input() fieldId;
    @Input() extraParams?: object;

    mapErrors() {
        const mapToKeyValue = (params, key) => {
            if (this.extraParams) params = assignIn(params, this.extraParams);
            return {params, key};
        };
        return map(this.fieldInstance.errors, mapToKeyValue);
    }
}
