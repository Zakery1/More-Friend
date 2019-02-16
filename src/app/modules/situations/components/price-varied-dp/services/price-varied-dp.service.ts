import { Injectable } from '@angular/core';

// services
import { PurchasePricesService } from 'src/app/modules/services/purchase-price-service/purchase-prices.service';

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

	constructor(
		private purchasePriceService: PurchasePricesService
	) {
		this.reset();
		this.setDownPayments();
	}

	reset() {
		this.fillInputs();
	}

	setDownPayments() {
		this.pvdWork.variedDPArrays.downPayments = this.pvdWork.variedDPArrays.purchasePrices.map( x => (x * this.pvdWork.variedDPConfig.downPaymentPercentage / 100));
	}

	fillInputs() {
		this.pvdWork.variedDPArrays.purchasePrices = this.purchasePriceService.purchasePrices;
		this.pvdWork.variedDPConfig.downPaymentPercentage = 5;
		this.pvdWork.variedDPConfig.upfrontMiFf = 1.75;
		this.pvdWork.variedDPConfig.miPercentage = 0.85;
		this.pvdWork.variedDPConfig.estimatedTaxes = 0.8;
		this.pvdWork.variedDPConfig.estimateHOI = 0.35;
		this.pvdWork.variedDPConfig.interestRate = 4.125;
		this.pvdWork.variedDPConfig.mortgageYears = 30;
	}


}
