import {Routes} from '@angular/router';
import {Parent1Component} from '../pages/parent1/parent1.component';
import {Parent2Component} from '../pages/parent2/parent2.component';
import {Parent3Component} from '../pages/parent3/parent3.component';
import {Error404Component} from '../pages/error404/error404.component';
import {IdentifierComponent} from '../pages/identifier/identifier.component';
import {QueryComponent} from '../pages/query/query.component';
import {HomeComponent} from '../pages/home/home.component';
import {childRoutes} from './child-routes';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'parent1', component: Parent1Component, children: childRoutes},
  {path: 'parent2', component: Parent2Component},
  {path: 'parent3', component: Parent3Component},
  {path: 'identifier/:id', component: IdentifierComponent},
  {path: 'query', component: QueryComponent},
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: 'error404'}
];

