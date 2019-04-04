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



	switchNav(key) {
		for (let i = 0; i < this.navbarKeys.length; i++) {
			console.log('for loop', this.navbarKeys[i]);
		}
		console.log(this.navbarKeys[key].activated);

			this.navbarObj[key].activated = !this.navbarObj[key].activated;
	}

	// const raw = {
	// 	item1: { key: 'sdfd', value:'sdfd' },
	// 	item2: { key: 'sdfd', value:'sdfd' },
	// 	item3: { key: 'sdfd', value:'sdfd' }
	//   };

	//   const allowed = ['item1', 'item3'];

	// const filtered = Object.keys(raw)
	// 	.filter(key => allowed.includes(key))
	// 	.reduce((obj, key) => {
	// 		obj[key] = raw[key];
	// 		return obj;
	// 	}, {});

	// console.log(filtered);
	// this.navbarObj[key].activated = !this.navbarObj[key].activated;



constructor() {
	// this.clickNavScenario();
	console.log('navbarObj', this.navbarObj);

	this.navbarKeys = Object.keys(this.navbarObj);
}

ngOnInit() {

}
}
