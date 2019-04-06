import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';


import { Navbar } from './../../models/situations';



@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	public navBarInitial = JSON.parse(JSON.stringify(Navbar));
	public navbarObj = Navbar;
	public navbarKeys = [];
	public activeKey = 'pvdp';


	switchNav(key) {
		this.activeKey = key;
	}
	constructor() {
		// this.clickNavScenario();
		// console.log('navbarObj', this.navbarObj);

		this.navbarKeys = Object.keys(this.navbarObj);
	}

	ngOnInit() {

	}
}
