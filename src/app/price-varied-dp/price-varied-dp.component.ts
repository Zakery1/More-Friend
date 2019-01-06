import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-price-varied-dp',
	templateUrl: './price-varied-dp.component.html',
	styleUrls: ['./price-varied-dp.component.scss']
})
export class PriceVariedDpComponent implements OnInit {

	private purchasePriceOne: number = null;
	private purchasePriceTwo: number = null;
	private purchasePriceThree: number = null;
	private purchasePriceFour: number = null;

	constructor() {
		this.purchasePriceOne = 225000;
		this.purchasePriceTwo = 250000;
		this.purchasePriceThree = 275000;
		this.purchasePriceFour = 300000;
	}

	ngOnInit() {
	}

}
