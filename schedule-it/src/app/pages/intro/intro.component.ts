import {Component, OnInit} from '@angular/core';
import {Page} from 'tns-core-modules/ui/page/page';

@Component({
	selector: 'intro',
	moduleId: module.id,
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
	constructor(private page: Page) {}

	ngOnInit(): void {
		//this.page.actionBarHidden = true;
	}
}
