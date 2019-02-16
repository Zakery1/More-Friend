import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PurchasePricesService {

	public purchasePrices = [];
	public purchasePriceOne: number;
	public purchasePriceTwo: number;
	public purchasePriceThree: number;
	public purchasePriceFour: number;

	constructor() {
		this.purchasePrices = [225000, 250000, 275000, 300000];
	}
}
