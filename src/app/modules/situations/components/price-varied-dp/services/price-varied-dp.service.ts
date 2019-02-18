import { Injectable } from '@angular/core';

// services
import { PurchasePricesService } from 'src/app/modules/services/purchase-price-service/purchase-prices.service';
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

	reset() {
		this.fillInputs();
	}

	fillInputs() {
		this.arrays.purchasePrices = this.purchasePriceService.purchasePrices;
		this.config.downPaymentPercentage = 5;
		this.config.upfrontMiFf = 1.75;
		this.config.miPercentage = 0.85;
		this.config.estimatedTaxes = 0.8;
		this.config.estimateHOI = 0.35;
		this.config.interestRate = 4.125;
		this.config.mortgageYears = 30;
	}

	public setPurchasePrices() {
		this.arrays.purchasePrices = this.arrays.purchasePrices.map(pP => {
			console.log('map PPs', pP);

			setTimeout(() => this.calculationsService.getPurchasePrices(pP), 500);
			console.log('after map', this.arrays.purchasePrices);
			console.log('call get in service', this.calculationsService.getPurchasePrices(pP));
		});
	}

	public setDownPayments() {
		this.arrays.downPayments = this.arrays.purchasePrices.map(
			pP => this.calculationsService.getDownPaymentsUsingPercentage(pP, this.pvdWork.variedDPConfig.downPaymentPercentage),
		);
	}

	// setDownPayments() {
	// 	this.pvdWork.variedDPArrays.downPayments = this.pvdWork.variedDPArrays.purchasePrices.map( x => (x * this.pvdWork.variedDPConfig.downPaymentPercentage / 100));
	// }
	update() {
		this.setDownPayments();
		this.setPurchasePrices();
		console.log('purchase prices in service', this.arrays.purchasePrices);
	}





}
