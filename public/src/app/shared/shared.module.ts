import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FakeThumbnailComponent} from './fake-thumbnail/fake-thumbnail.component';
import {FakeThumbnailRandomCategoryService} from "./fake-thumbnail/fake-thumbnail-random-category.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    exports: [
        TranslateModule,
        FakeThumbnailComponent
    ],
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    providers: [
        FakeThumbnailRandomCategoryService
    ],
    declarations: [FakeThumbnailComponent],
    entryComponents: [],
})
export class SharedModule {
}
