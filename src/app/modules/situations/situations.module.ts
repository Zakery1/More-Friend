import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { PriceVariedDpComponent } from './components/price-varied-dp/price-varied-dp.component';
import { PriceOnePropDpComponent } from './components/price-one-prop-dp/price-one-prop-dp.component';
import { PriceOnePropExactComponent } from './components/price-one-prop-exact/price-one-prop-exact.component';
import { PriceVariedExactDpComponent } from './components/price-varied-exact-dp/price-varied-exact-dp.component';
import { ProgramDpComponent } from './components/program-dp/program-dp.component';
import { CashToCloseComponent } from './components/cash-to-close/cash-to-close.component';
import { RateFeeCompPurchaseComponent } from './components/rate-fee-comp-purchase/rate-fee-comp-purchase.component';



@NgModule({
	declarations: [
		PriceVariedDpComponent,
		PriceOnePropDpComponent,
		PriceOnePropExactComponent,
		PriceVariedExactDpComponent,
		ProgramDpComponent,
		CashToCloseComponent,
		RateFeeCompPurchaseComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule

	]
})
export class SituationsModule { }
