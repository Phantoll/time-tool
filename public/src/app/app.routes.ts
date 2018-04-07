import {Route} from "@angular/router";

import {FriendOverviewComponent} from "./friend/friend-overview/friend-overview.component";
import {CustomerOverviewComponent} from "./customer/customer-overview/customer-overview.component";
import {AppHomeComponent} from "./app-home.component";

export interface RouteItem extends Route {
    showInMenu?: boolean,
    title?: string
}

export const routes: RouteItem[] = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: AppHomeComponent, title: 'DASHBOARD.label', showInMenu: true},
    {path: 'customers', component: CustomerOverviewComponent, title: 'CUSTOMER.label', showInMenu: true},
    {path: 'tickets', component: FriendOverviewComponent, title: 'TICKETS.label', showInMenu: true},
    {path: 'users', component: FriendOverviewComponent, title: 'USER.label', showInMenu: true}
];
