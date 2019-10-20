import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Child1Component} from '../pages/parent1/child1/child1.component';
import {Child2Component} from '../pages/parent1/child2/child2.component';
import {Child3Component} from '../pages/parent1/child3/child3.component';

const childRoutes: Routes = [
  {path: 'child1', component: Child1Component},
  {path: 'child2', component: Child2Component},
  {path: 'child3', component: Child3Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ChildRouterModule {
}
