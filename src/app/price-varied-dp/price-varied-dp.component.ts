import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-price-varied-dp',
	templateUrl: './price-varied-dp.component.html',
	styleUrls: ['./price-varied-dp.component.scss']
})
export class PriceVariedDpComponent implements OnInit {

	private purchasePriceOne = 225000;
	private purchasePriceTwo = 250000;
	private purchasePriceThree = 275000;
	private purchasePriceFour = 300000;
	private downPaymentPercentage = 5;

	private downPaymentOne = ( this.purchasePriceOne * this.downPaymentPercentage) / 100;
	private downPaymentTwo = ( this.purchasePriceTwo * this.downPaymentPercentage) / 100;
	private downPaymentThree = ( this.purchasePriceThree * this.downPaymentPercentage ) / 100;
	private downPaymentFour = ( this.purchasePriceFour * this.downPaymentPercentage) / 100;


	constructor() {

	}

	ngOnInit() {
	}

}
