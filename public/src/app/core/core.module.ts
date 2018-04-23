import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreNavigationComponent} from './navigation/core-navigation.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [CoreNavigationComponent],
    exports: [CoreNavigationComponent]
})

export class CoreModule {
}
