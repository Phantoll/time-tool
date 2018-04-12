import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAbstractComponent } from './field-abstract.component';

describe('FieldAbstractComponent', () => {
  let component: FieldAbstractComponent;
  let fixture: ComponentFixture<FieldAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
