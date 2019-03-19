import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	navbar = {
		pvdp: true,
		pvdpD: false,
		podp: false,
		podpE: false,
		cashTC: false,
		programDP: false,
		rateFeeCompPurchase: false,
	}

	constructor() { }

	ngOnInit() {

	}

	changeRoute(route) {
		
	}



}
