import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {registerElement} from 'nativescript-angular/element-registry';
import {Carousel, CarouselItem} from 'nativescript-carousel';
import * as applicationModule from '@nativescript/core/application';
import * as imageModule from 'nativescript-image';
import {TNSImageModule} from 'nativescript-image/angular';
import {NativeScriptSvgModule} from 'nativescript-svg/angular';

import {AppRoutingModule} from '@src/app/app-routing.module';
import {AppComponent} from '@src/app/app.component';
import {IntroModule} from '@src/app/pages/intro/intro.module.tns';
import {HomeModule} from '@src/app/pages/home/home.module.tns';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);

if (applicationModule.android) {
	applicationModule.on(applicationModule.launchEvent, () => {
		console.log('initialize pipeline');
		imageModule.initialize();
	});
}

@NgModule({
	declarations: [AppComponent],
	imports: [NativeScriptModule, AppRoutingModule, IntroModule, TNSImageModule, NativeScriptSvgModule, HomeModule],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
