import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceVariedDpComponent } from './price-varied-dp.component';

describe('PriceVariedDpComponent', () => {
	let component: PriceVariedDpComponent;
	let fixture: ComponentFixture<PriceVariedDpComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PriceVariedDpComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PriceVariedDpComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
