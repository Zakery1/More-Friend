import { Component, OnInit } from '@angular/core';

// services
import { PurchasePricesService } from 'src/app/modules/services/purchase-price-service/purchase-prices.service';

@Component({
	selector: 'app-price-varied-exact-dp',
	templateUrl: './price-varied-exact-dp.component.html',
	styleUrls: ['./price-varied-exact-dp.component.scss']
})
export class PriceVariedExactDpComponent implements OnInit {

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
	private downPaymentPercentage = 5;

	private upfrontMiFf = 1.75;
	private miPercentage = 0.85;
	private estimatedTaxes = 0.8;
	private estimateHOI = 0.35;
	private interestRate = 4.125;
	private mortgageYears = 30;
	private downPayment = 20000;

	private loanAmountOne = (this.purchasePriceOne - this.downPayment) * (100 + this.upfrontMiFf) / 100;
	private loanAmountTwo = (this.purchasePriceTwo - this.downPayment) * (100 + this.upfrontMiFf) / 100;
	private loanAmountThree = (this.purchasePriceThree - this.downPayment) * (100 + this.upfrontMiFf) / 100;
	private loanAmountFour = (this.purchasePriceFour - this.downPayment) * (100 + this.upfrontMiFf) / 100;

	// tslint:disable-next-line:max-line-length
	private pAndIOne = ((this.interestRate / 1200.0 * +this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndITwo = ((this.interestRate / 1200.0 * +this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndIThree = ((this.interestRate / 1200.0 * +this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
	// tslint:disable-next-line:max-line-length
	private pAndIFour = ((this.interestRate / 1200.0 * +this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

	private mortgageInsuranceOne = +((this.purchasePriceOne - this.downPayment) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceTwo = +((this.purchasePriceTwo - this.downPayment) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceThree = +((this.purchasePriceThree - this.downPayment) * this.miPercentage / 1200).toFixed(2);
	private mortgageInsuranceFour = +((this.purchasePriceFour - this.downPayment) * this.miPercentage / 1200).toFixed(2);

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


	ngOnInit() {
		this.update();
	}

	update() {
		this.loanAmountOne = (this.purchasePriceOne - this.downPayment) * (100 + this.upfrontMiFf) / 100;
		this.loanAmountTwo = (this.purchasePriceTwo - this.downPayment) * (100 + this.upfrontMiFf) / 100;
		this.loanAmountThree = (this.purchasePriceThree - this.downPayment) * (100 + this.upfrontMiFf) / 100;
		this.loanAmountFour = (this.purchasePriceFour - this.downPayment) * (100 + this.upfrontMiFf) / 100;

		// tslint:disable-next-line:max-line-length
		this.pAndIOne = ((this.interestRate / 1200.0 * this.loanAmountOne) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndITwo = ((this.interestRate / 1200.0 * this.loanAmountTwo) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndIThree = ((this.interestRate / 1200.0 * this.loanAmountThree) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);
		// tslint:disable-next-line:max-line-length
		this.pAndIFour = ((this.interestRate / 1200.0 * this.loanAmountFour) / (1.0 - Math.pow(1.0 + this.interestRate / 1200.00, -1.0 * this.mortgageYears * 12))).toFixed(2);

		this.mortgageInsuranceOne = +((this.purchasePriceOne - this.downPayment) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceTwo = +((this.purchasePriceTwo - this.downPayment) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceThree = +((this.purchasePriceThree - this.downPayment) * this.miPercentage / 1200).toFixed(2);
		this.mortgageInsuranceFour = +((this.purchasePriceFour - this.downPayment) * this.miPercentage / 1200).toFixed(2);

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

	toOriginal() {
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
		this.downPayment = 20000;
		this.update();
	}

}
