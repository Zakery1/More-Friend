import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';


import { Navbar } from './../../models/situations';



@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	public navbarObj = Navbar;
	public navbarKeys = [];



	clickNavScenarioes() {

	}

	// clickNavScenario() {
	// 	for (let item in Navbar) {
	// 		console.log(item)
	// 	}
	// }

	// keys() : Array<string> {
	//     var keys = Object.keys(this.Navbar);
	//     return keys;
	// }

	constructor() {
		// this.clickNavScenario();
		console.log('navbarObj', this.navbarObj);

		this.navbarKeys = Object.keys(this.navbarObj);
	}

	ngOnInit() {

	}
}
