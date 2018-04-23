import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileDashboardComponent } from './customer-profile-dashboard.component';

describe('CustomerProfileDashboardComponent', () => {
  let component: CustomerProfileDashboardComponent;
  let fixture: ComponentFixture<CustomerProfileDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerProfileDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerProfileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
