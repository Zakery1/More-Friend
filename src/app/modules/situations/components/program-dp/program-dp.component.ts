import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-program-dp',
	templateUrl: './program-dp.component.html',
	styleUrls: ['./program-dp.component.scss']
})
export class ProgramDpComponent implements OnInit {

	private purchasePrice = 340000;

	private downPaymentPercentage = 3.5;
	private upfrontMiFf = 0;
	private miPercentage = 0;
	private estimatedTaxes = 72;
	private estimateHOI = 61.5;
	private interestRate = 3.75;
	private mortgageYears = 15;

	private downPaymentOne = (this.purchasePrice * this.downPaymentPercentage) / 100;
	private downPaymentTwo = (this.purchasePrice * this.downPaymentPercentage) / 100;
	private downPaymentThree = (this.purchasePrice * this.downPaymentPercentage) / 100;
	private downPaymentFour = (this.purchasePrice * this.downPaymentPercentage) / 100;

	private loanAmountOne = ((this.purchasePrice * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
	private loanAmountTwo = ((this.purchasePrice * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
		// tslint:disable-next-line:max-line-length
	private loanAmountThree = ((this.purchasePrice * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
	private loanAmountFour = ((this.purchasePrice * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100);

	// tslint:disable-next-line:max-line-length
	private pAndIOne = ((this.interestRate / 1200.0 * +this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndITwo = ((this.interestRate / 1200.0 * +this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndIThree = ((this.interestRate / 1200.0 * +this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndIFour = ((this.interestRate / 1200.0 * +this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

	private mortgageInsuranceOne = +((this.purchasePrice - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceTwo = +((this.purchasePrice - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceThree = +((this.purchasePrice - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceFour = +((this.purchasePrice - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

	private estimatedPTOne = this.estimatedTaxes;
	private estimatedPTTwo = this.estimatedTaxes;
	private estimatedPTThree = this.estimatedTaxes;
	private estimatedPTFour = this.estimatedTaxes;

	private estimatedHIOne = this.estimateHOI;
	private estimatedHITwo = this.estimateHOI;
	private estimatedHIThree = this.estimateHOI;
	private estimatedHIFour = this.estimateHOI;

	private estimatedPaymentOne = (+this.pAndIOne + +this.mortgageInsuranceOne + +this.estimatedPTOne + +this.estimatedHIOne).toFixed(2);
	private estimatedPaymentTwo = (+this.pAndITwo + +this.mortgageInsuranceTwo + +this.estimatedPTTwo + +this.estimatedHITwo).toFixed(2);
		// tslint:disable-next-line:max-line-length
	private estimatedPaymentThree = (+this.pAndIThree + +this.mortgageInsuranceThree + +this.estimatedPTThree + +this.estimatedHIThree).toFixed(2);
	private estimatedPaymentFour = (+this.pAndIFour + +this.mortgageInsuranceFour + +this.estimatedPTFour + +this.estimatedHIFour).toFixed(2);

	private update() {
		this.downPaymentOne = this.downPaymentOne;
		this.downPaymentTwo = this.downPaymentTwo;
		this.downPaymentThree = this.downPaymentThree;
		this.downPaymentFour = this.downPaymentFour;
			// tslint:disable-next-line:max-line-length

		this.loanAmountOne = ((this.purchasePrice * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
		this.loanAmountTwo = ((this.purchasePrice * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.loanAmountThree = ((this.purchasePrice * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
		this.loanAmountFour = +((this.purchasePrice * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);

		// tslint:disable-next-line:max-line-length
		this.pAndIOne = ((this.interestRate / 1200.0 * +this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndITwo = ((this.interestRate / 1200.0 * +this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndIThree = ((this.interestRate / 1200.0 * +this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndIFour = ((this.interestRate / 1200.0 * this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

		this.mortgageInsuranceOne = +((this.purchasePrice - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceTwo = +((this.purchasePrice - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceThree = +((this.purchasePrice - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceFour = +((this.purchasePrice - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

		this.estimatedPTOne = this.estimatedTaxes;
		this.estimatedPTTwo = this.estimatedTaxes;
		this.estimatedPTThree = this.estimatedTaxes;

		this.estimatedHIOne = this.estimateHOI;
		this.estimatedHITwo = this.estimateHOI;
		this.estimatedHIThree = this.estimateHOI;
		this.estimatedHIFour = this.estimateHOI;

		this.estimatedPaymentOne = (+this.pAndIOne + +this.mortgageInsuranceOne + +this.estimatedPTOne + +this.estimatedHIOne).toFixed(2);
		this.estimatedPaymentTwo = (+this.pAndITwo + +this.mortgageInsuranceTwo + +this.estimatedPTTwo + +this.estimatedHITwo).toFixed(2);
			// tslint:disable-next-line:max-line-length
		this.estimatedPaymentThree = (+this.pAndIThree + +this.mortgageInsuranceThree + +this.estimatedPTThree + +this.estimatedHIThree).toFixed(2);
		this.estimatedPaymentFour = (+this.pAndIFour + +this.mortgageInsuranceFour + +this.estimatedPTFour + +this.estimatedHIFour).toFixed(2);
	}

	private toOriginal() {
		this.purchasePrice = 340000;
		this.downPaymentPercentage = 5;
		this.upfrontMiFf = 1.75;
		this.miPercentage = 0.85;
		this.estimatedTaxes = 0.8;
		this.estimateHOI = 0.35;
		this.interestRate = 4.125;
		this.mortgageYears = 30;
		this.update();
	}

	constructor() { }

	ngOnInit() {
	}

}
