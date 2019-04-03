import { Injectable } from '@angular/core';
import { LoanValues } from '../../interfaces/loanValues';

// Interfaces


@Injectable({
	providedIn: 'root'
})
export class PurchasePricesService {

	public purchasePrices;
	public purchasePriceOne: 225000;
	public purchasePriceTwo: 250000;
	public purchasePriceThree: 275000;
	public purchasePriceFour: 300000;

	constructor() {
		this.purchasePrices = [225000, 250000, 275000, 300000];
	}
}
