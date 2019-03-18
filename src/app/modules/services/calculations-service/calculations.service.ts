import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// interfaces
import { PurchasePrice } from './../../interfaces/purchasePrice';

@Injectable({
	providedIn: 'root'
})
export class CalculationsService {

	// getHeroes (): Observable<PurchasePrice> {
	// 	return this.http.get<Hero[]>(this.heroesUrl)
	// 	  .pipe(
	// 		tap(_ => this.log('fetched heroes')),
	// 		catchError(this.handleError('getHeroes', []))
	// 	  );
	//   }

	public getPurchasePrices(): Observable<PurchasePrice[]> {
		return pP;
	}

	public getPAndI(iR, lA, mYs) {
		return ((iR / 1200.0 * + lA) / (1.0 - Math.pow(1.0 + iR / 1200.00, -1.0 * mYs * 12)));
	}

	public getDownPaymentsUsingPercentage(pP, dPP) {
		return (pP * dPP / 100);
	}

	// setDownPayments() {
	// 	this.pvdWork.variedDPArrays.downPayments = this.pvdWork.variedDPArrays.purchasePrices.map( x => (x * this.pvdWork.variedDPConfig.downPaymentPercentage / 100));
	// }

	// private setPAndIs() {
	// 	this.pAndIs = this.purchasePrices.map(
	// 		(price) => this.getPAndI(price)
	// 	);
	// }

	// public getPAndI(loanAmount) {
	// 	return ((this.config.interestRate / 1200.0 * + loanAmount) / (1.0 - Math.pow(1.0 + this.config.interestRate / 1200.00, -1.0 * this.config.mortgageYears * 12))).toFixed(2)
	// }

	constructor() { }
}
