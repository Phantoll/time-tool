import {Injectable} from '@angular/core';
import {random} from 'lodash/fp';

const imageCategories = ['animals', 'architecture', 'nature', 'people', 'tech'];

@Injectable()
export class FakeThumbnailRandomCategoryService {

    public getRandom() {
        return imageCategories[random(0)(imageCategories.length - 1)]
    }
}
