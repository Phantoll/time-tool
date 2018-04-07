import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendOverviewComponent } from './friend-overview.component';

describe('FriendOverviewComponent', () => {
  let component: FriendOverviewComponent;
  let fixture: ComponentFixture<FriendOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
