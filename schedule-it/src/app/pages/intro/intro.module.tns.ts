import { NgModule } from '@angular/core';
import {IntroComponent} from "@src/app/pages/intro/intro.component";
import {NativeScriptSvgModule} from 'nativescript-svg/angular';



@NgModule({
	declarations: [IntroComponent],
	imports: [NativeScriptSvgModule],
	exports: [IntroComponent]
})
export class IntroModule {}
