import {NgModule} from '@angular/core';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {routes} from '@src/app/app.routes';

import { TNSImageModule } from 'nativescript-image/angular';
import * as imageModule from 'nativescript-image';
import * as applicationModule from '@nativescript/core/application';

if (applicationModule.android) {
	applicationModule.on(applicationModule.launchEvent, () => {
		console.log('initialize pipeline');
		imageModule.initialize();
	});
}

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes), TNSImageModule],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
