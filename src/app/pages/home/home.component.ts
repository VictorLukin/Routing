import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  id: string;
  query: string;

  constructor(private router: Router) {
  }

  onClickGoIdentifier() {
    this.router.navigate(['identifier', this.id]);
  }

  onClickGoQuery() {
    this.router.navigate(['query', this.query]);
  }

}
