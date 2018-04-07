import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeThumbnailComponent } from './fake-thumbnail.component';

describe('FakeThumbnailComponent', () => {
  let component: FakeThumbnailComponent;
  let fixture: ComponentFixture<FakeThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
