import { TestBed } from '@angular/core/testing';

import { CategoriesCalculateService } from './categories-calculate.service';

describe('CategoriesCalculateService', () => {
  let service: CategoriesCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
