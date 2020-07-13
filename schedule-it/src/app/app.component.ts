import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}


const a = 3;
// Comment BBBB
