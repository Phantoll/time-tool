import {Component, OnInit} from '@angular/core';

import {routes, RouteItem} from '../../app.routes';
import {map, filter} from 'lodash/fp';

@Component({
    selector: 'tt-core-navigation',
    templateUrl: './core-navigation.component.html',
    styleUrls: ['./core-navigation.component.scss']
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
