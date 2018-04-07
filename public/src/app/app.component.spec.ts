import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {TranslateModule} from '@ngx-translate/core';

describe('AppComponent', () => {
    // beforeEach(async(() => {
    //     TestBed.configureTestingModule({
    //         imports: [
    //             CoreModule,
    //             // RouterModule.forRoot([{path: 'lorem', component: 'ipsum'}], {useHash: false}),
    //             TranslateModule.forRoot()
    //         ],
    //         declarations: [
    //             AppComponent
    //         ],
    //     }).compileComponents();
    // }));
    // it('should create the app', async(() => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     const app = fixture.debugElement.componentInstance;
    //     expect(app).toBeTruthy();
    // }));
});
