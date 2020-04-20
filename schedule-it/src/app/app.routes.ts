import {Routes} from '@angular/router';

import {HomeComponent} from '@src/app/pages/home/home.component';
import {IntroComponent} from '@src/app/pages/intro/intro.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/intro',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'intro',
		component: IntroComponent
	}
];
