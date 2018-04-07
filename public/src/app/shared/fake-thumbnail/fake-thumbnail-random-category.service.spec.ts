import { TestBed, inject } from '@angular/core/testing';

import { FakeThumbnailRandomCategoryService } from './fake-thumbnail-random-category.service';

describe('FakeThumbnailRandomCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeThumbnailRandomCategoryService]
    });
  });

  it('should be created', inject([FakeThumbnailRandomCategoryService], (service: FakeThumbnailRandomCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
