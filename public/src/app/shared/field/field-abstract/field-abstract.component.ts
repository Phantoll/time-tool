import {Component, Input} from '@angular/core';
import {map} from 'lodash';

@Component({
    selector: 'tt-field-abstract',
    templateUrl: './field-abstract.component.html',
    styleUrls: ['./field-abstract.component.scss']
})
export class FieldAbstractComponent {
    @Input() label;
    @Input() fieldInstance;
    @Input() fieldId;

    mapErrors() {
        const mapToKeyValue = (params, key) => {
            return {params, key};
        };
        return map(this.fieldInstance.errors, mapToKeyValue);
    }
}
