import { SituationsModule } from './modules/situations/situations.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		DashboardComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		SituationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
