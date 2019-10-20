import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-identifier',
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.scss']
})
export class IdentifierComponent implements OnDestroy {

  private id: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => { this.id = params.id; } );
  }

  ngOnDestroy() {
    this.activatedRoute.params.
  }

}
