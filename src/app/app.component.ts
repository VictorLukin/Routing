import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing';
  defaultId = 'default ID';
  defaultFirstQuery = 'first query default text';
  defaultSecondQuery = 'second query default text';
}
