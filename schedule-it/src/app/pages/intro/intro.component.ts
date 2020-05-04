import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'intro',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {
		//this.page.actionBarHidden = true;
	}

	onSubmitBtn(): void {
		this.router.navigate(['/home']);
	}
}
