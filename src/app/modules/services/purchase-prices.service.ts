import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PurchasePricesService {

	public purchasePriceOne: number;
	public purchasePriceTwo: number;
	public purchasePriceThree: number;
	public purchasePriceFour: number;

	constructor() {
		this.purchasePriceOne = 225000;
		this.purchasePriceTwo = 250000;
		this.purchasePriceThree = 275000;
		this.purchasePriceFour = 300000;
	}
}
