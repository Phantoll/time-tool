import {Component} from '@angular/core';
import {random} from 'lodash/fp';
import {FakeThumbnailRandomCategoryService} from "./shared/fake-thumbnail/fake-thumbnail-random-category.service";


@Component({
    selector: 'app-home',
    templateUrl: './app-home.component.html'
})
export class AppHomeComponent {
    constructor(private categoryService: FakeThumbnailRandomCategoryService) {};

    private category = this.categoryService.getRandom();

    changeImage() {
        let newCategory = this.category;
        while(newCategory == this.category){
            newCategory = this.categoryService.getRandom();
        }
        this.category = newCategory;
    }

}
