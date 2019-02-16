import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PriceVariedDPService {

	public downPaymentPercentage: number;
	public upfrontMiFf: number;
	public miPercentage: number;
	public estimatedTaxes: number;
	public estimateHOI: number;
	public interestRate: number;
	public mortgageYears: number;

	constructor() {
		this.downPaymentPercentage = 5;
		this.upfrontMiFf = 1.75;
		this.miPercentage = 0.85;
		this.estimatedTaxes = 0.8;
		this.estimateHOI = 0.35;
		this.interestRate = 4.125;
		this.mortgageYears = 30;
	}
}
