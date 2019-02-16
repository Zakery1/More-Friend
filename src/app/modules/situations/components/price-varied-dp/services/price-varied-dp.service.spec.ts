import { TestBed } from '@angular/core/testing';

import { PriceVariedDPService } from './price-varied-dp.service';

describe('PriceVariedDPService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PriceVariedDPService = TestBed.get(PriceVariedDPService);
		expect(service).toBeTruthy();
	});
});
