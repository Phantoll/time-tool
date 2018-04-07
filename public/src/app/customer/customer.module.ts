import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CustomerOverviewComponent} from './customer-overview/customer-overview.component';
import {SharedModule} from "../shared/shared.module";
import {CustomerCreateComponent} from './customer-overview/create/create.component';
import {CustomerRepositoryService} from "./customer-repository.service";

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule
    ],
    providers: [CustomerRepositoryService],
    declarations: [CustomerOverviewComponent, CustomerCreateComponent],
    entryComponents: [CustomerCreateComponent]
})
export class CustomerModule {
}
