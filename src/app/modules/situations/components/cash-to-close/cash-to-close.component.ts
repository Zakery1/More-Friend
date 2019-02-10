import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cash-to-close',
	templateUrl: './cash-to-close.component.html',
	styleUrls: ['./cash-to-close.component.scss']
})
export class CashToCloseComponent implements OnInit {

	private downPayment = 6615;
	private originationFC = 3712;
	private earnestMoney = 1000;
	private sellerCredit = 5670;
	private otherDPA = -7265;
	private dailyInterest = 396;
	private oneYearHI = 360000;
	private prepaidITmE = 602;
	private titleFees = 1650;
	private countryRecordingFees = 40;
	private prepaidHOADues = 380;
	private hOATransferFees = 200;
	private dPAAdminFee = 1145;

	constructor() { }

	ngOnInit() {
	}

}
