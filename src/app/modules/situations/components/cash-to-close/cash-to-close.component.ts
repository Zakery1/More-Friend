import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cash-to-close',
	templateUrl: './cash-to-close.component.html',
	styleUrls: ['./cash-to-close.component.scss']
})
export class CashToCloseComponent implements OnInit {

	private downPayment = 6615;
	private originationFC = 3712;
	private earnestMoney = -1000;
	private sellerCredit = -5670;
	private otherDPA = -7265;
	private dailyInterest = 396;
	private oneYearHI = 360;
	private prepaidITmE = 602;
	private titleFees = 1650;
	private countyRecordingFees = 40;
	private homeWarranty = 500;
	private prepaidHOADues = 380;
	private hOATransferFees = 200;
	private dPAAdminFee = 1145;
	private underwritingFee = 0;


	// tslint:disable-next-line:max-line-length
	private totalEstimatedClosingCosts = (this.underwritingFee + this.dailyInterest + this.oneYearHI + this.prepaidITmE + this.titleFees + this.countyRecordingFees + this.homeWarranty + this.prepaidHOADues + this.hOATransferFees + this.dPAAdminFee);

	// tslint:disable-next-line:max-line-length
	private totalEstimatedCashToClose = (this.downPayment + this.totalEstimatedClosingCosts + this.originationFC + this.earnestMoney + this.sellerCredit + this.otherDPA);

	update() {
		// tslint:disable-next-line:max-line-length
		this.totalEstimatedClosingCosts = (this.underwritingFee + this.dailyInterest + this.oneYearHI + this.prepaidITmE + this.titleFees + this.countyRecordingFees + this.homeWarranty + this.prepaidHOADues + this.hOATransferFees + this.dPAAdminFee);

		// tslint:disable-next-line:max-line-length
		this.totalEstimatedCashToClose = (this.downPayment + this.totalEstimatedClosingCosts + this.originationFC + this.earnestMoney + this.sellerCredit + this.otherDPA);
	}

	revertToOriginal() {
		this.downPayment = 6615;
		this.originationFC = 3712;
		this.earnestMoney = -1000;
		this.sellerCredit = -5670;
		this.otherDPA = -7265;
		this.dailyInterest = 396;
		this.oneYearHI = 360;
		this.prepaidITmE = 602;
		this.titleFees = 1650;
		this.countyRecordingFees = 40;
		this.homeWarranty = 500;
		this.prepaidHOADues = 380;
		this.hOATransferFees = 200;
		this.dPAAdminFee = 1145;
		this.underwritingFee = 0;
		this.update();
	}

	constructor() { }

	ngOnInit() {

	}



}
