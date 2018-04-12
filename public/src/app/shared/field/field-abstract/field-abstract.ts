import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {forwardRef, Input} from '@angular/core';
import {uniqueId, isUndefined, find} from 'lodash';

export abstract class FieldAbstractController implements ControlValueAccessor {
    @Input() placeholder?: string;
    @Input() label?: string;
    @Input() isRequired?: boolean;

    protected id: string;
    public validationFields: any[];

    protected constructor() {
        this.id = uniqueId('tt-field-');
    }

    _value: any = '';
    get value(): any {
        return this._value;
    };

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    writeValue(value: any) {
        this._value = value;
        this.onChange(value);
    }

    onChange = (_) => {
    };
    onTouched = () => {
    };

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    hasValidation() {
        const hasDefined = (item) => !isUndefined(item);
        return find(this.validationFields, hasDefined);
    }
}

export function createFieldProvider(type: any) {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => type),
        multi: true
    };
}
