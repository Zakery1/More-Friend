import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-price-varied-dp',
	templateUrl: './price-varied-dp.component.html',
	styleUrls: ['./price-varied-dp.component.scss']
})
export class PriceVariedDpComponent implements OnInit {

	// private dpPercentage = true;
	// private eTPercentage = true;
	// private eHOIPercentage = true;

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

	private mortgageInsuranceOne = ((this.purchasePriceOne - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceTwo = ((this.purchasePriceTwo - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceThree = ((this.purchasePriceThree - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceFour = ((this.purchasePriceFour - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

	private estimatedPTOne = (this.purchasePriceOne * this.estimatedTaxes / 1200).toFixed(2);
	private estimatedPTTwo = (this.purchasePriceTwo * this.estimatedTaxes / 1200).toFixed(2);
	private estimatedPTThree = (this.purchasePriceThree * this.estimatedTaxes / 1200).toFixed(2);
	private estimatedPTFour = (this.purchasePriceFour * this.estimatedTaxes / 1200).toFixed(2);

	private estimatedHIOne = (this.purchasePriceOne * this.estimateHOI / 1200).toFixed(2);
	private estimatedHITwo = (this.purchasePriceTwo * this.estimateHOI / 1200).toFixed(2);
	private estimatedHIThree = (this.purchasePriceThree * this.estimateHOI / 1200).toFixed(2);
	private estimatedHIFour = (this.purchasePriceFour * this.estimateHOI / 1200).toFixed(2);

	// private switchDPPercentage() {
	// 	this.dpPercentage = !this.dpPercentage;
	// 	if (this.dpPercentage === false) {
	// 		this.downPaymentOne = this.downPaymentTwo = this.downPaymentThree = this.downPaymentFour = this.downPaymentPercentage;
	// 		console.log(this.downPaymentOne, this.downPaymentTwo, this.downPaymentThree, this.downPaymentFour);
	// 		this.loanAmountOne = (this.purchasePriceOne - this.downPaymentPercentage) * (100 + this.upfrontMiFf) / 100;
	// 		this.loanAmountTwo = (this.purchasePriceTwo - this.downPaymentPercentage) * (100 + this.upfrontMiFf) / 100;
	// 		this.loanAmountThree = (this.purchasePriceThree - this.downPaymentPercentage) * (100 + this.upfrontMiFf) / 100;
	// 		this.loanAmountFour = (this.purchasePriceFour - this.downPaymentPercentage) * (100 + this.upfrontMiFf) / 100;
	// 		// tslint:disable-next-line:max-line-length
	// 		this.pAndIOne = ((this.interestRate / 1200.0 * this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 		console.log(this.pAndIOne);
	// 		// tslint:disable-next-line:max-line-length
	// 		this.pAndITwo = ((this.interestRate / 1200.0 * this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 		// tslint:disable-next-line:max-line-length
	// 		this.pAndIThree = ((this.interestRate / 1200.0 * this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 		// tslint:disable-next-line:max-line-length
	// 		this.pAndIFour = ((this.interestRate / 1200.0 * this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 		this.mortgageInsuranceOne = ((this.purchasePriceOne - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
	// 		this.mortgageInsuranceTwo = ((this.purchasePriceTwo - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
	// 		this.mortgageInsuranceThree = ((this.purchasePriceThree - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
	// 		this.mortgageInsuranceFour = ((this.purchasePriceFour - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

	// 	} else {
	// 		this.downPaymentOne = (this.purchasePriceOne * this.downPaymentPercentage) / 100;
	// 		this.downPaymentTwo = (this.purchasePriceTwo * this.downPaymentPercentage) / 100;
	// 		this.downPaymentThree = (this.purchasePriceThree * this.downPaymentPercentage) / 100;
	// 		this.downPaymentFour = (this.purchasePriceFour * this.downPaymentPercentage) / 100;
	// 		this.loanAmountOne = (this.purchasePriceOne * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	// 		this.loanAmountTwo = (this.purchasePriceTwo * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	// 		this.loanAmountThree = (this.purchasePriceThree * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	// 		this.loanAmountFour = (this.purchasePriceFour * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	// 		// tslint:disable-next-line:max-line-length
	// 		this.pAndIOne = ((this.interestRate / 1200.0 * this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 		// tslint:disable-next-line:max-line-length
	// 		this.pAndITwo = ((this.interestRate / 1200.0 * this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 		// tslint:disable-next-line:max-line-length
	// 		this.pAndIThree = ((this.interestRate / 1200.0 * this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 		// tslint:disable-next-line:max-line-length
	// 		this.pAndIFour = ((this.interestRate / 1200.0 * this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 		this.mortgageInsuranceOne = ((this.purchasePriceOne - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
	// 		this.mortgageInsuranceTwo = ((this.purchasePriceTwo - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
	// 		this.mortgageInsuranceThree = ((this.purchasePriceThree - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
	// 		this.mortgageInsuranceFour = ((this.purchasePriceFour - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);
	// 	}
	// }

	// private switchETPercentage() {
	// 	this.eTPercentage = !this.eTPercentage;
	// }

	// private switcheHOIPercentage() {
	// 	this.eHOIPercentage = !this.eHOIPercentage;
	// }

	// private update() {
	// 	if (this.dpPercentage === true) {
	// 		this.downPaymentOne = this.downPaymentPercentage;
	// 		this.downPaymentTwo = this.downPaymentPercentage;
	// 		this.downPaymentThree = this.downPaymentPercentage;
	// 		this.downPaymentFour = this.downPaymentPercentage;
	// 	} else {
	// 		this.downPaymentOne = (this.purchasePriceOne * this.downPaymentPercentage) / 100;
	// 		this.downPaymentTwo = (this.purchasePriceTwo * this.downPaymentPercentage) / 100;
	// 		this.downPaymentThree = (this.purchasePriceThree * this.downPaymentPercentage) / 100;
	// 		this.downPaymentFour = (this.purchasePriceFour * this.downPaymentPercentage) / 100;
	// 	}

	// 	this.loanAmountOne = (this.purchasePriceOne * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	// 	this.loanAmountTwo = (this.purchasePriceTwo * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	// 	this.loanAmountThree = (this.purchasePriceThree * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	// 	this.loanAmountFour = (this.purchasePriceFour * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;

	// 	// tslint:disable-next-line:max-line-length
	// 	this.pAndIOne = ((this.interestRate / 1200.0 * this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 	// tslint:disable-next-line:max-line-length
	// 	this.pAndITwo = ((this.interestRate / 1200.0 * this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 	// tslint:disable-next-line:max-line-length
	// 	this.pAndIThree = ((this.interestRate / 1200.0 * this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// 	// tslint:disable-next-line:max-line-length
	// 	this.pAndIFour = ((this.interestRate / 1200.0 * this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

	// 	this.mortgageInsuranceOne = ((this.purchasePriceOne - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
	// 	this.mortgageInsuranceTwo = ((this.purchasePriceTwo - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
	// 	this.mortgageInsuranceThree = ((this.purchasePriceThree - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
	// 	this.mortgageInsuranceFour = ((this.purchasePriceFour - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

	// 	this.estimatedPTOne = (this.purchasePriceOne * this.estimatedTaxes / 1200).toFixed(2);
	// 	this.estimatedPTTwo = (this.purchasePriceTwo * this.estimatedTaxes / 1200).toFixed(2);
	// 	this.estimatedPTThree = (this.purchasePriceThree * this.estimatedTaxes / 1200).toFixed(2);
	// 	this.estimatedPTFour = (this.purchasePriceFour * this.estimatedTaxes / 1200).toFixed(2);

	// 	this.estimatedHIOne = (this.purchasePriceOne * this.estimateHOI / 1200).toFixed(2);
	// 	this.estimatedHITwo = (this.purchasePriceTwo * this.estimateHOI / 1200).toFixed(2);
	// 	this.estimatedHIThree = (this.purchasePriceThree * this.estimateHOI / 1200).toFixed(2);
	// 	this.estimatedHIFour = (this.purchasePriceFour * this.estimateHOI / 1200).toFixed(2);
	// }

	constructor() {

	}

	ngOnInit() {
	}

}
