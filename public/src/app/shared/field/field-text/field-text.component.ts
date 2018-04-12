import {Component, OnInit, Input} from '@angular/core';
import {FieldAbstractController, createFieldProvider} from '../field-abstract/field-abstract';

@Component({
    selector: 'tt-field-text',
    templateUrl: './field-text.component.html',
    styleUrls: ['./field-text.component.scss'],
    providers: [createFieldProvider(FieldTextComponent)]
})
export class FieldTextComponent extends FieldAbstractController implements OnInit {
    @Input() minLength: number;
    @Input() maxLength: number;

    ngOnInit() {
        this.validationFields = [this.isRequired, this.minLength, this.maxLength];
    }
}
