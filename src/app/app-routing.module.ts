import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceVariedDpComponent } from './price-varied-dp/price-varied-dp.component';
import { PriceVariedExactDpComponent } from './price-varied-exact-dp/price-varied-exact-dp.component';

const routes: Routes = [
	{ path: 'pvdp', component: PriceVariedDpComponent },
	{ path: 'pvdpD', component: PriceVariedExactDpComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
