import { Component, Input, OnInit } from '@angular/core';
import {createFieldProvider, FieldAbstractController} from '../field-abstract/field-abstract';

@Component({
  selector: 'tt-field-number',
  templateUrl: './field-number.component.html',
  styleUrls: ['./field-number.component.scss'],
    providers: [createFieldProvider(FieldNumberComponent)]
})
export class FieldNumberComponent  extends FieldAbstractController implements OnInit {

  @Input() minValue: number;
  @Input() maxValue: number;

  ngOnInit() {
      this.validationFields = [this.isRequired, this.minValue, this.maxValue];
  }
}
