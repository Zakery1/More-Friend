import { TestBed } from '@angular/core/testing';

import { PurchasePricesService } from './purchase-prices.service';

describe('PurchasePricesService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PurchasePricesService = TestBed.get(PurchasePricesService);
		expect(service).toBeTruthy();
	});
});
