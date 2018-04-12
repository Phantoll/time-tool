import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SharedModule} from './shared/shared.module';

import {AppHomeComponent} from './app-home.component';

describe('AppHomeComponent', () => {
    let component: AppHomeComponent;
    let fixture: ComponentFixture<AppHomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [AppHomeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
