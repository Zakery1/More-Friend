import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-price-varied-exact-dp',
	templateUrl: './price-varied-exact-dp.component.html',
	styleUrls: ['./price-varied-exact-dp.component.scss']
})
export class PriceVariedExactDpComponent implements OnInit {

	private purchasePriceOne = 225000;
	private purchasePriceTwo = 250000;
	private purchasePriceThree = 275000;
	private purchasePriceFour = 300000;
	private downPaymentPercentage = 5;

	private upfrontMiFf = 1.75;
	private miPercentage = 0.85;
	private estimatedTaxes = 0.8;
	private estimateHOI = 0.35;
	private interestRate = 4.125;
	private mortgageYears = 30;


	private downPaymentOne = (this.purchasePriceOne * this.downPaymentPercentage) / 100;
	private downPaymentTwo = (this.purchasePriceTwo * this.downPaymentPercentage) / 100;
	private downPaymentThree = (this.purchasePriceThree * this.downPaymentPercentage) / 100;
	private downPaymentFour = (this.purchasePriceFour * this.downPaymentPercentage) / 100;

	private loanAmountOne = (this.purchasePriceOne * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	private loanAmountTwo = (this.purchasePriceTwo * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	private loanAmountThree = (this.purchasePriceThree * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	private loanAmountFour = (this.purchasePriceFour * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;

	// tslint:disable-next-line:max-line-length
	private pAndIOne = ((this.interestRate / 1200.0 * this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndITwo = ((this.interestRate / 1200.0 * this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndIThree = ((this.interestRate / 1200.0 * this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndIFour = ((this.interestRate / 1200.0 * this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

	private mortgageInsuranceOne = +((this.purchasePriceOne - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceTwo = +((this.purchasePriceTwo - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceThree = +((this.purchasePriceThree - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceFour = +((this.purchasePriceFour - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

	private estimatedPTOne = (this.purchasePriceOne * this.estimatedTaxes / 1200).toFixed(2);
	private estimatedPTTwo = (this.purchasePriceTwo * this.estimatedTaxes / 1200).toFixed(2);
	private estimatedPTThree = (this.purchasePriceThree * this.estimatedTaxes / 1200).toFixed(2);
	private estimatedPTFour = (this.purchasePriceFour * this.estimatedTaxes / 1200).toFixed(2);

	private estimatedHIOne = (this.purchasePriceOne * this.estimateHOI / 1200).toFixed(2);
	private estimatedHITwo = (this.purchasePriceTwo * this.estimateHOI / 1200).toFixed(2);
	private estimatedHIThree = (this.purchasePriceThree * this.estimateHOI / 1200).toFixed(2);
	private estimatedHIFour = (this.purchasePriceFour * this.estimateHOI / 1200).toFixed(2);

	private estimatedPaymentOne = (+this.pAndIOne + +this.mortgageInsuranceOne + +this.estimatedPTOne + +this.estimatedHIOne).toFixed(2);
	private estimatedPaymentTwo = (+this.pAndITwo + +this.mortgageInsuranceTwo + +this.estimatedPTTwo + +this.estimatedHITwo).toFixed(2);
		// tslint:disable-next-line:max-line-length
	private estimatedPaymentThree = (+this.pAndIThree + +this.mortgageInsuranceThree + +this.estimatedPTThree + +this.estimatedHIThree).toFixed(2);
	private estimatedPaymentFour = (+this.pAndIFour + +this.mortgageInsuranceFour + +this.estimatedPTFour + +this.estimatedHIFour).toFixed(2);

	constructor() { }

	ngOnInit() {
	}

}
