import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {each} from 'lodash/fp';
import {DashboardCardComponent} from './dashboard-card.component';

describe('DashboardCardComponent', () => {
    let component: DashboardCardComponent;
    let fixture: ComponentFixture<DashboardCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, TranslateModule.forRoot()],
            declarations: [DashboardCardComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('test get Accent Class', () => {
        const testCases = [
            {'accent': 'primary', 'expectedClass': 'text-white bg-primary'},
            {'accent': 'secondary', 'expectedClass': 'text-white bg-secondary'},
            {'accent': 'light', 'expectedClass': 'bg-light'},
            {'accent': 'undefinedAccentWhoFallbackToLight', 'expectedClass': 'bg-light'}
        ];

        const testIsExpected = (testCase: any) => {
            component.accent = testCase['accent'];
            expect(component.getAccentColor()).toBe(testCase['expectedClass']);
        };
        each(testIsExpected)(testCases);
    });
});
