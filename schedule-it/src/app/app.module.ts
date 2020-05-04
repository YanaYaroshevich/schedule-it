import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '@src/app/app-routing.module';
import {AppComponent} from '@src/app/app.component';
import {IntroModule} from '@src/app/pages/intro/intro.module';
import { HomeModule } from "@src/app/pages/home/home.module";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, IntroModule, HomeModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
