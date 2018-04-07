import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoreNavigationComponent} from './core-navigation.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";

import {TranslateModule} from '@ngx-translate/core';

describe('CoreNavigationComponent', () => {
    let component: CoreNavigationComponent;
    let fixture: ComponentFixture<CoreNavigationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule, RouterModule, TranslateModule],
            declarations: [CoreNavigationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoreNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
