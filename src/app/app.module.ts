import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PriceVariedDpComponent } from './price-varied-dp/price-varied-dp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriceVariedExactDpComponent } from './price-varied-exact-dp/price-varied-exact-dp.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		PriceVariedDpComponent,
		DashboardComponent,
		PriceVariedExactDpComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
