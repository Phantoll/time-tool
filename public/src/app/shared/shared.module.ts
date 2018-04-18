import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FakeThumbnailComponent} from './fake-thumbnail/fake-thumbnail.component';
import {FakeThumbnailRandomCategoryService} from './fake-thumbnail/fake-thumbnail-random-category.service';
import {FieldTextComponent} from './field/field-text/field-text.component';
import {FieldAbstractComponent} from './field/field-abstract/field-abstract.component';
import {FieldNumberComponent} from './field/field-number/field-number.component';
import {RepositoryService} from "./repository/repository.service";

@NgModule({
    exports: [
        TranslateModule,
        FormsModule,
        FieldTextComponent,
        FieldNumberComponent,
        FakeThumbnailComponent
    ],
    imports: [
        TranslateModule.forRoot(),
        CommonModule,
        FormsModule,
        CurrencyMaskModule,
        NgbModule.forRoot()
    ],
    providers: [
        FakeThumbnailRandomCategoryService, RepositoryService
    ],
    declarations: [FakeThumbnailComponent, FieldAbstractComponent, FieldTextComponent, FieldNumberComponent],
    entryComponents: [],
})
export class SharedModule {
}
