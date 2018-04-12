import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from '../../shared/shared.module';

import {DashboardOverviewComponent} from './dashboard-overview.component';
import {DashboardCardComponent} from '../shared/dashboard-card/dashboard-card.component';

describe('DashboardOverviewComponent', () => {
    let component: DashboardOverviewComponent;
    let fixture: ComponentFixture<DashboardOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [DashboardOverviewComponent, DashboardCardComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
