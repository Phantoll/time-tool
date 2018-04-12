import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CustomerOverviewComponent} from './customer-overview.component';
import {SharedModule} from '../../shared/shared.module';
import {CustomerRepositoryService} from '../customer-repository.service';

describe('CustomerOverviewComponent', () => {
    let component: CustomerOverviewComponent;
    let fixture: ComponentFixture<CustomerOverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [CustomerRepositoryService],
            imports: [SharedModule],
            declarations: [CustomerOverviewComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
