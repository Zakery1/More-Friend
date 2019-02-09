import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-program-dp',
	templateUrl: './program-dp.component.html',
	styleUrls: ['./program-dp.component.scss']
})
export class ProgramDpComponent implements OnInit {

	private purchasePrice = 340000;

	private downPaymentPercentageOne = 20;
	private downPaymentPercentageTwo = 25;
	private downPaymentPercentageThree = 30;
	private downPaymentPercentageFour = 40;

	private upfrontMiFfOne = 0;
	private upfrontMiFfTwo = 0;
	private upfrontMiFfThree = 0;
	private upfrontMiFfFour = 0;
	private miPercentage = 0;
	private estimatedTaxes = 166;
	private estimateHOI = 40;

	private interestRateOne = 4.75;
	private interestRateTwo = 4.625;
	private interestRateThree = 4.625;
	private interestRateFour = 4.5;
	private mortgageYears = 30;

	private downPaymentOne = (this.purchasePrice * this.downPaymentPercentageOne) / 100;
	private downPaymentTwo = (this.purchasePrice * this.downPaymentPercentageTwo) / 100;
	private downPaymentThree = (this.purchasePrice * this.downPaymentPercentageThree) / 100;
	private downPaymentFour = (this.purchasePrice * this.downPaymentPercentageFour) / 100;

	private loanAmountOne = (((this.purchasePrice - this.downPaymentOne)) * (1 + (this.upfrontMiFfOne / 100))).toFixed(2);
	private loanAmountTwo = (((this.purchasePrice - this.downPaymentTwo)) * (1 + (this.upfrontMiFfTwo / 100))).toFixed(2);
	private loanAmountThree = (((this.purchasePrice - this.downPaymentThree)) * (1 + (this.upfrontMiFfThree / 100))).toFixed(2);
	private loanAmountFour = (((this.purchasePrice - this.downPaymentFour)) * (1 + (this.upfrontMiFfFour / 100))).toFixed(2);

	// tslint:disable-next-line:max-line-length
	private pAndIOne = ((this.interestRateOne / 1200.0 * +this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRateOne / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndITwo = ((this.interestRateTwo / 1200.0 * +this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRateTwo / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndIThree = ((this.interestRateThree / 1200.0 * +this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRateThree / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndIFour = ((this.interestRateFour / 1200.0 * +this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRateFour / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

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
		this.downPaymentOne = (this.purchasePrice * this.downPaymentPercentageOne) / 100;
		this.downPaymentTwo = (this.purchasePrice * this.downPaymentPercentageTwo) / 100;
		this.downPaymentThree = (this.purchasePrice * this.downPaymentPercentageThree) / 100;
		this.downPaymentFour = (this.purchasePrice * this.downPaymentPercentageFour) / 100;

		this.loanAmountOne = (((this.purchasePrice - this.downPaymentOne)) * (1 + (this.upfrontMiFfOne / 100))).toFixed(2);
		this.loanAmountTwo = (((this.purchasePrice - this.downPaymentTwo)) * (1 + (this.upfrontMiFfTwo / 100))).toFixed(2);
		this.loanAmountThree = (((this.purchasePrice - this.downPaymentThree)) * (1 + (this.upfrontMiFfThree / 100))).toFixed(2);
		this.loanAmountFour = (((this.purchasePrice - this.downPaymentFour)) * (1 + (this.upfrontMiFfFour / 100))).toFixed(2);

		// tslint:disable-next-line:max-line-length
		this.pAndIOne = ((this.interestRateOne / 1200.0 * +this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRateOne / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndITwo = ((this.interestRateTwo / 1200.0 * +this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRateTwo / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndIThree = ((this.interestRateThree / 1200.0 * +this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRateThree / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndIFour = ((this.interestRateFour / 1200.0 * +this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRateFour / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

		this.mortgageInsuranceOne = +((this.purchasePrice - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceTwo = +((this.purchasePrice - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceThree = +((this.purchasePrice - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceFour = +((this.purchasePrice - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

		this.estimatedPTOne = this.estimatedTaxes;
		this.estimatedPTTwo = this.estimatedTaxes;
		this.estimatedPTThree = this.estimatedTaxes;
		this.estimatedPTFour = this.estimatedTaxes;

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
		this.downPaymentPercentageOne = 20;
		this.downPaymentPercentageTwo = 25;
		this.downPaymentPercentageThree = 30;
		this.downPaymentPercentageFour = 40;
		this.upfrontMiFfOne = 0;
		this.upfrontMiFfOne = 0;
		this.upfrontMiFfOne = 0;
		this.upfrontMiFfOne = 0;
		this.miPercentage = 0.85;
		this.estimatedTaxes = 0.8;
		this.estimateHOI = 0.35;
		this.interestRateOne = 4.75;
		this.interestRateTwo = 4.625;
		this.interestRateThree = 4.625;
		this.interestRateFour = 4.5;
		this.mortgageYears = 30;
		this.mortgageYears = 30;
		this.update();
	}

	constructor() { }

	ngOnInit() {
	}

}
