import {Routes} from '@angular/router';

import {HomeComponent} from '@src/app/pages/home/home.component';
import {IntroComponent} from '@src/app/pages/intro/intro.component';
import {LoginComponent} from '@src/app/pages/login/login.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'intro',
		component: IntroComponent
	},
	{
		path: 'login',
		component: LoginComponent
	}
];
