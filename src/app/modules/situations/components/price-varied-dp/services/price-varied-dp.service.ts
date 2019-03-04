import { Injectable } from '@angular/core';

// services
import { PurchasePricesService } from '../../../../services/purchase-price-service/purchase-prices.service';
import { CalculationsService } from './../../../../services/calculations-service/calculations.service';

@Injectable({
	providedIn: 'root'
})
export class PriceVariedDPService {

	public pvdWork = {
		variedDPConfig: {
			downPaymentPercentage: null,
			upfrontMiFf: null,
			miPercentage: null,
			estimatedTaxes: null,
			estimateHOI: null,
			interestRate: null,
			mortgageYears: null
		},
		variedDPArrays: {
			purchasePrices: [],
			downPayments: [],
			loanAmounts: [],
			pAndIs: [],
			mortgageInsurances: [],
			estimatePTs: [],
			estimatesHIs: [],
			estimatedPayments: []
		}
	};

	private config = this.pvdWork.variedDPConfig;
	private arrays = this.pvdWork.variedDPArrays;

	constructor(
		private purchasePriceService: PurchasePricesService,
		private calculationsService: CalculationsService
	) {
		this.reset();
		this.setDownPayments();
	}

	update() {
		console.log('before update in service', this.arrays.purchasePrices);
		this.setDownPayments();
		this.setPurchasePrices();
		console.log('after update function in service', this.purchasePriceService);
	}



	public setPurchasePrices() {
		console.log('before setPurchases in service', this.arrays.purchasePrices);
		this.arrays.purchasePrices = this.arrays.purchasePrices.map(pP => {
			return this.calculationsService.getPurchasePrices(pP);
			// console.log('call get in service', this.calculationsService.getPurchasePrices(pP));
		});
		console.log('after map', this.arrays.purchasePrices);
	}

	reset() {
		this.fillInputs();
	}

	fillInputs() {
		this.arrays.purchasePrices = [225000, 250000, 275000, 300000];
		this.config.downPaymentPercentage = 5;
		this.config.upfrontMiFf = 1.75;
		this.config.miPercentage = 0.85;
		this.config.estimatedTaxes = 0.8;
		this.config.estimateHOI = 0.35;
		this.config.interestRate = 4.125;
		this.config.mortgageYears = 30;
	}

	public setDownPayments() {
		this.arrays.downPayments = this.arrays.purchasePrices.map(
			pP => this.calculationsService.getDownPaymentsUsingPercentage(pP, this.pvdWork.variedDPConfig.downPaymentPercentage),
		);
	}

	// setDownPayments() {
	// 	this.pvdWork.variedDPArrays.downPayments = this.pvdWork.variedDPArrays.purchasePrices.map( x => (x * this.pvdWork.variedDPConfig.downPaymentPercentage / 100));
	// }
}
