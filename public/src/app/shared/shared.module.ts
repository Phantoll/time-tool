import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FakeThumbnailComponent} from './fake-thumbnail/fake-thumbnail.component';
import {FakeThumbnailRandomCategoryService} from './fake-thumbnail/fake-thumbnail-random-category.service';
import {FieldTextComponent} from './field/field-text/field-text.component';
import {FieldAbstractComponent} from './field/field-abstract/field-abstract.component';
import {FieldNumberComponent} from './field/field-number/field-number.component';

@NgModule({
    exports: [
        TranslateModule,
        FormsModule,
        FieldTextComponent,
        FakeThumbnailComponent
    ],
    imports: [
        TranslateModule.forRoot(),
        CommonModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    providers: [
        FakeThumbnailRandomCategoryService
    ],
    declarations: [FakeThumbnailComponent, FieldAbstractComponent, FieldTextComponent, FieldNumberComponent],
    entryComponents: [],
})
export class SharedModule {
}
