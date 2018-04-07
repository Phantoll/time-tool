import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {FakeThumbnailRandomCategoryService} from "./fake-thumbnail-random-category.service";


@Component({
    selector: 'app-fake-thumbnail',
    templateUrl: './fake-thumbnail.component.html'
})
export class FakeThumbnailComponent implements OnChanges {
    private imageBasePath = 'https://placeimg.com';
    private image: string;

    @Input()
    category: string;

    @Input()
    width: number = 320;

    @Input()
    height: number = 240;

    ngOnChanges(values) {
        if (values.category) this.setImage();
    }

    private setImage() {
        this.image = `${this.imageBasePath}/${this.width}/${this.height}/${this.category}`;
    }

}


