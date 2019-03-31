
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

// enums
import { NavbarEnum } from './../../enums/situations';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	public navBarEnum = NavbarEnum;

	clickNavScenarioes() {
		
	}

	clickNavScenario(pvdp) {
		for (let item in NavbarEnum) {
			console.log(item)
		}
	}

    // keys() : Array<string> {
    //     var keys = Object.keys(this.navBarEnum);
    //     return keys;
    // }

	constructor() {
		// this.clickNavScenario();
		console.log( 'navbar enum', this.navBarEnum.pvdp)
	 }

	ngOnInit() {

	}
}
