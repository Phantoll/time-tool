import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FriendOverviewComponent} from './friend-overview/friend-overview.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FriendOverviewComponent
    ],
    exports: [
        FriendOverviewComponent
    ],
    providers: []
})
export class FriendModule {}
