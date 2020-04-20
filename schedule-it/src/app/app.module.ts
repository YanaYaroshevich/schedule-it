import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '@src/app/app-routing.module';
import {AppComponent} from '@src/app/app.component';
import {HomeComponent} from '@src/app/pages/home/home.component';
import {IntroModule} from '@src/app/pages/intro/intro.module';

@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [BrowserModule, AppRoutingModule, IntroModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
