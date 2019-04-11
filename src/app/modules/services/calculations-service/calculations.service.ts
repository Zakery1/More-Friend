
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormArray } from '@angular/forms';

// interfaces
import { LoanValues } from './../../interfaces/loanValues';


import { PurchasePricesService } from './../purchase-price-service/purchase-prices.service';



@Injectable({
	providedIn: 'root'
})
export class CalculationsService {

	purchasePrices: LoanValues = this.purchasePriceService.purchasePrices;

	downPayments: number[] = this.purchasePrices.map(pP => {
		return pP * this.fb.control.val
	});

	officerInputForm = this.fb.group({
		downPaymentPercentage: ['5'],
		upfrontMiFf: [''],
		miPercentage: [''],
		estimatedTaxes: [''],
		estimateHOI: [''],
		interestRate: [''],
		mortgageYears: [''],
		purchasePriceArray: this.fb.array(this.purchasePrices.map(
			(price: number) => this.fb.control([price])
		)),
		downPaymentArray: this.fb.array(this.downPayments.map(
			(downPayment: number) => this.fb.control([downPayment])
		))
	});



	private loanAmounts = [];
	private pAndIs = [];
	private mortgageInsurances = [];
	private estimatePTs = [];
	private estimatesHIs = [];
	private estimatedPayments = [];

	constructor(
		private fb: FormBuilder,
		private purchasePriceService: PurchasePricesService,
		private calculationsService: CalculationsService) {
	}

	// public getDownPaymentsUsingPercentage(pP, dPP): Observable<LoanValues[]> {
	// 	return (pP * dPP / 100);
	// }

	get purchasePriceArray() {
		return this.officerInputForm.get('purchasePriceArray') as FormArray;
	}

	get downPaymentArray() {
		return this.officerInputForm.get('downPaymentArray') as FormArray;
	}

	// updatePurchasePrices() {
	// 	this.officerInputForm.valueChanges.subscribe(() => {
	// 		this.calculationsService.getPurchasePrices();
	// 	});
	// }
}

	// updateDownPayments() {
	// 	this.officerInputForm.valueChanges.subscribe(() => {
	// 		this.calculationsService.getDownPaymentsUsingPercentage();
	// 	})
	// 	}


	// public getPAndI(iR, lA, mYs) {
	// 	return ((iR / 1200.0 * + lA) / (1.0 - Math.pow(1.0 + iR / 1200.00, -1.0 * mYs * 12)));
	// }



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


