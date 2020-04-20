import {Component} from '@angular/core';
import {Carousel, CarouselItem} from 'nativescript-carousel';
import {registerElement} from 'nativescript-angular/element-registry';

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}
