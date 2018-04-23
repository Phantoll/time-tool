import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CustomerOverviewComponent} from './customer-overview/customer-overview.component';
import {SharedModule} from '../shared/shared.module';
import {CustomerCreateComponent} from './customer-overview/create/create.component';
import {CustomerRepositoryService} from './customer-repository.service';
import {CustomerProfileComponent} from './customer-profile/customer-profile.component';
import { CustomerProfileFormComponent } from './customer-profile-form/customer-profile-form.component';
import { CustomerProfileDashboardComponent } from './customer-profile-dashboard/customer-profile-dashboard.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule
    ],
    providers: [CustomerRepositoryService],
    declarations: [CustomerOverviewComponent, CustomerCreateComponent, CustomerProfileComponent, CustomerProfileFormComponent, CustomerProfileDashboardComponent],
    entryComponents: [CustomerCreateComponent]
})
export class CustomerModule {
}
