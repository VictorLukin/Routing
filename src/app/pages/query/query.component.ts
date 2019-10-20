import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnDestroy {

  firstQuery: string;
  secondQuery: string;
  queriesSubscription: Subscription;

  constructor(activatedRoute: ActivatedRoute) {
    this.queriesSubscription = activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.firstQuery = params.firstQuery;
        this.secondQuery = params.secondQuery;
      });
  }

  ngOnDestroy(): void {
    this.queriesSubscription.unsubscribe();
  }

}
