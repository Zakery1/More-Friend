import { TestBed } from '@angular/core/testing';

import { CalculationsServiceService } from './calculations-service.service';

describe('CalculationsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculationsServiceService = TestBed.get(CalculationsServiceService);
    expect(service).toBeTruthy();
  });
});
