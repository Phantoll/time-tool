import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'tt-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('de');
        translate.use('de');
    }
}
