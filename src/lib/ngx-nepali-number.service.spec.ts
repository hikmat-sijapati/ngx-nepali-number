import { TestBed } from '@angular/core/testing';

import { NgxNepaliNumberService } from './ngx-nepali-number.service';

describe('NgxNepaliNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxNepaliNumberService = TestBed.get(NgxNepaliNumberService);
    expect(service).toBeTruthy();
  });
});
