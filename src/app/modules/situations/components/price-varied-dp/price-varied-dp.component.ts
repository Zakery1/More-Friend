import { Component, OnInit } from '@angular/core';

// services
import { PurchasePricesService } from './../../../services/purchase-prices.service';

@Component({
	selector: 'app-price-varied-dp',
	templateUrl: './price-varied-dp.component.html',
	styleUrls: ['./price-varied-dp.component.scss']
})
export class PriceVariedDpComponent implements OnInit {

	public purchasePriceOne: number;
	public purchasePriceTwo: number;
	public purchasePriceThree: number;
	public purchasePriceFour: number;

	constructor(private purchasePriceService: PurchasePricesService) {
		this.purchasePriceOne = this.purchasePriceService.purchasePriceOne;
		this.purchasePriceTwo = this.purchasePriceService.purchasePriceTwo;
		this.purchasePriceThree = this.purchasePriceService.purchasePriceThree;
		this.purchasePriceFour = this.purchasePriceService.purchasePriceFour;
	}

	public downPaymentPercentage = 5;
	public upfrontMiFf = 1.75;
	public miPercentage = 0.85;
	public estimatedTaxes = 0.8;
	public estimateHOI = 0.35;
	public interestRate = 4.125;
	public mortgageYears = 30;


	public downPaymentOne = (this.purchasePriceOne * this.downPaymentPercentage) / 100;
	public downPaymentTwo = (this.purchasePriceTwo * this.downPaymentPercentage) / 100;
	public downPaymentThree = (this.purchasePriceThree * this.downPaymentPercentage) / 100;
	public downPaymentFour = (this.purchasePriceFour * this.downPaymentPercentage) / 100;

	public loanAmountOne = (this.purchasePriceOne * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	public loanAmountTwo = (this.purchasePriceTwo * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	public loanAmountThree = (this.purchasePriceThree * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;
	public loanAmountFour = (this.purchasePriceFour * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100;

	// tslint:disable-next-line:max-line-length
	public pAndIOne = ((this.interestRate / 1200.0 * this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	public pAndITwo = ((this.interestRate / 1200.0 * this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	public pAndIThree = ((this.interestRate / 1200.0 * this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	public pAndIFour = ((this.interestRate / 1200.0 * this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

	public mortgageInsuranceOne = +((this.purchasePriceOne - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
	public mortgageInsuranceTwo = +((this.purchasePriceTwo - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
	public mortgageInsuranceThree = +((this.purchasePriceThree - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
	public mortgageInsuranceFour = +((this.purchasePriceFour - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

	public estimatedPTOne = (this.purchasePriceOne * this.estimatedTaxes / 1200).toFixed(2);
	public estimatedPTTwo = (this.purchasePriceTwo * this.estimatedTaxes / 1200).toFixed(2);
	public estimatedPTThree = (this.purchasePriceThree * this.estimatedTaxes / 1200).toFixed(2);
	public estimatedPTFour = (this.purchasePriceFour * this.estimatedTaxes / 1200).toFixed(2);

	public estimatedHIOne = (this.purchasePriceOne * this.estimateHOI / 1200).toFixed(2);
	public estimatedHITwo = (this.purchasePriceTwo * this.estimateHOI / 1200).toFixed(2);
	public estimatedHIThree = (this.purchasePriceThree * this.estimateHOI / 1200).toFixed(2);
	public estimatedHIFour = (this.purchasePriceFour * this.estimateHOI / 1200).toFixed(2);

	public estimatedPaymentOne = (+this.pAndIOne + +this.mortgageInsuranceOne + +this.estimatedPTOne + +this.estimatedHIOne).toFixed(2);
	public estimatedPaymentTwo = (+this.pAndITwo + +this.mortgageInsuranceTwo + +this.estimatedPTTwo + +this.estimatedHITwo).toFixed(2);
	// tslint:disable-next-line:max-line-length
	public estimatedPaymentThree = (+this.pAndIThree + +this.mortgageInsuranceThree + +this.estimatedPTThree + +this.estimatedHIThree).toFixed(2);
	public estimatedPaymentFour = (+this.pAndIFour + +this.mortgageInsuranceFour + +this.estimatedPTFour + +this.estimatedHIFour).toFixed(2);

	ngOnInit() {
		this.update();
	}

	public update() {
		this.downPaymentOne = (this.purchasePriceOne * this.downPaymentPercentage) / 100;
		this.downPaymentTwo = (this.purchasePriceTwo * this.downPaymentPercentage) / 100;
		this.downPaymentThree = (this.purchasePriceThree * this.downPaymentPercentage) / 100;
		this.downPaymentFour = (this.purchasePriceFour * this.downPaymentPercentage) / 100;

		this.loanAmountOne = +((this.purchasePriceOne * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
		this.loanAmountTwo = +((this.purchasePriceTwo * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.loanAmountThree = +((this.purchasePriceThree * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);
		this.loanAmountFour = +((this.purchasePriceFour * (100 - this.downPaymentPercentage) / 100) * (100 + this.upfrontMiFf) / 100).toFixed(2);

		// tslint:disable-next-line:max-line-length
		this.pAndIOne = ((this.interestRate / 1200.0 * this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndITwo = ((this.interestRate / 1200.0 * this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndIThree = ((this.interestRate / 1200.0 * this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndIFour = ((this.interestRate / 1200.0 * this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

		this.mortgageInsuranceOne = +((this.purchasePriceOne - this.downPaymentOne) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceTwo = +((this.purchasePriceTwo - this.downPaymentTwo) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceThree = +((this.purchasePriceThree - this.downPaymentThree) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceFour = +((this.purchasePriceFour - this.downPaymentFour) * this.miPercentage / 1200).toFixed(2);

		this.estimatedPTOne = (this.purchasePriceOne * this.estimatedTaxes / 1200).toFixed(2);
		this.estimatedPTTwo = (this.purchasePriceTwo * this.estimatedTaxes / 1200).toFixed(2);
		this.estimatedPTThree = (this.purchasePriceThree * this.estimatedTaxes / 1200).toFixed(2);
		this.estimatedPTFour = (this.purchasePriceFour * this.estimatedTaxes / 1200).toFixed(2);

		this.estimatedHIOne = (this.purchasePriceOne * this.estimateHOI / 1200).toFixed(2);
		this.estimatedHITwo = (this.purchasePriceTwo * this.estimateHOI / 1200).toFixed(2);
		this.estimatedHIThree = (this.purchasePriceThree * this.estimateHOI / 1200).toFixed(2);
		this.estimatedHIFour = (this.purchasePriceFour * this.estimateHOI / 1200).toFixed(2);

		this.estimatedPaymentOne = (+this.pAndIOne + +this.mortgageInsuranceOne + +this.estimatedPTOne + +this.estimatedHIOne).toFixed(2);
		this.estimatedPaymentTwo = (+this.pAndITwo + +this.mortgageInsuranceTwo + +this.estimatedPTTwo + +this.estimatedHITwo).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.estimatedPaymentThree = (+this.pAndIThree + +this.mortgageInsuranceThree + +this.estimatedPTThree + +this.estimatedHIThree).toFixed(2);
		this.estimatedPaymentFour = (+this.pAndIFour + +this.mortgageInsuranceFour + +this.estimatedPTFour + +this.estimatedHIFour).toFixed(2);
	}

	public toOriginal() {
		this.purchasePriceOne = this.purchasePriceService.purchasePriceOne;
		this.purchasePriceTwo = this.purchasePriceService.purchasePriceTwo;
		this.purchasePriceThree = this.purchasePriceService.purchasePriceThree;
		this.purchasePriceFour = this.purchasePriceService.purchasePriceFour;
		this.downPaymentPercentage = 5;
		this.upfrontMiFf = 1.75;
		this.miPercentage = 0.85;
		this.estimatedTaxes = 0.8;
		this.estimateHOI = 0.35;
		this.interestRate = 4.125;
		this.mortgageYears = 30;
		this.update();
	}
}
