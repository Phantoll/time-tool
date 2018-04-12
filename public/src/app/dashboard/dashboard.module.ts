import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DashboardOverviewComponent} from './dashboard-overview/dashboard-overview.component';
import {DashboardCardComponent} from './shared/dashboard-card/dashboard-card.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        SharedModule,
        CommonModule
    ],
    exports: [DashboardOverviewComponent],
    declarations: [DashboardOverviewComponent, DashboardCardComponent]
})
export class DashboardModule {
}
