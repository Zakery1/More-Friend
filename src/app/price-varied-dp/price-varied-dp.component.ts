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

	private upfrontMiFf = 0;
	private miPercentage = 0.37;
	private estimatedTaxes = 0.85;
	private estimateHOI = 0.3;
	private interestRate = 4.75;
	private mortgageYears = 30;


	private downPaymentOne = ( this.purchasePriceOne * this.downPaymentPercentage) / 100;
	private downPaymentTwo = ( this.purchasePriceTwo * this.downPaymentPercentage) / 100;
	private downPaymentThree = ( this.purchasePriceThree * this.downPaymentPercentage ) / 100;
	private downPaymentFour = ( this.purchasePriceFour * this.downPaymentPercentage) / 100;

	private loanAmountOne =  (this.purchasePriceOne * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;

	constructor() {

	}

	ngOnInit() {
	}

}
