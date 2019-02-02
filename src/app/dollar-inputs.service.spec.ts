import { TestBed } from '@angular/core/testing';

import { DollarInputsService } from './dollar-inputs.service';

describe('DollarInputsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DollarInputsService = TestBed.get(DollarInputsService);
    expect(service).toBeTruthy();
  });
});
