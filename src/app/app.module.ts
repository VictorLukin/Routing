import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Parent1Component} from './pages/parent1/parent1.component';
import {Parent2Component} from './pages/parent2/parent2.component';
import {Parent3Component} from './pages/parent3/parent3.component';
import {Error404Component} from './pages/error404/error404.component';
import {Child1Component} from './pages/parent1/child1/child1.component';
import {Child2Component} from './pages/parent1/child2/child2.component';
import {Child3Component} from './pages/parent1/child3/child3.component';
import {IdentifierComponent} from './pages/identifier/identifier.component';
import {QueryComponent} from './pages/query/query.component';
import {routes} from './routes/main-routes';
import {ButtonToParentComponent} from './components/button-to-parent/button-to-parent.component';
import {HomeComponent} from './pages/home/home.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    Parent3Component,
    Error404Component,
    Child1Component,
    Child2Component,
    Child3Component,
    IdentifierComponent,
    QueryComponent,
    ButtonToParentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
