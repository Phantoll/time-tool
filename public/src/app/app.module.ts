import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Translation ----------------------------------------
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// Routing -------------------------------------------
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';

// APP - Components ----------------------------------
import {AppComponent} from './app.component';
import {AppHomeComponent} from './app-home.component';


// App - Modules -------------------------------------
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {FriendModule} from './friend/friend.module';
import {CustomerModule} from './customer/customer.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        AppHomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {useHash: false}),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgbModule.forRoot(),
        CoreModule,
        SharedModule,
        DashboardModule,
        CustomerModule,
        FriendModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
