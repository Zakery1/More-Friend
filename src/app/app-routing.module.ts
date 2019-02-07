import { PriceOnePropExactComponent } from './modules/situations/components/price-one-prop-exact/price-one-prop-exact.component';
import { PriceOnePropDpComponent } from './modules/situations/components/price-one-prop-dp/price-one-prop-dp.component';
import { PriceVariedExactDpComponent } from './modules/situations/components/price-varied-exact-dp/price-varied-exact-dp.component';
import { PriceVariedDpComponent } from './modules/situations/components/price-varied-dp/price-varied-dp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'pvdp', component: PriceVariedDpComponent },
	{ path: 'pvdpD', component: PriceVariedExactDpComponent },
	{ path: 'pvdpD', component: PriceVariedExactDpComponent },
	{ path: 'podp', component: PriceOnePropDpComponent },
	{ path: 'podpE', component: PriceOnePropExactComponent},
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
