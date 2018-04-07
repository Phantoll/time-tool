import {Component, OnInit} from '@angular/core';

import {routes, RouteItem} from "../../app.routes";
import {map, filter} from 'lodash/fp';

@Component({
    selector: 'app-core-navigation',
    templateUrl: './core-navigation.component.html',
})
export class CoreNavigationComponent implements OnInit {
    menuItems: RouteItem[];


    ngOnInit() {
        this.setMenuItems();
    }

    private setMenuItems() {
        this.menuItems = filter(['showInMenu', true])(routes);
    }
}
