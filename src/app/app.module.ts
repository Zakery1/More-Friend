import { SituationsModule } from './modules/situations/situations.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		DashboardComponent,
		FooterComponent
	],
	imports: [
		BrowserAnimationsModule,
		MatButtonModule, MatCheckboxModule,
		BrowserModule,
		AppRoutingModule,
		MatTabsModule,
		FormsModule,
		SituationsModule,
		ReactiveFormsModule,
		MatSidenavModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
