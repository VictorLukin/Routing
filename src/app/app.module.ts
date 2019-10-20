import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Parent1Component } from './Pages/parent1/parent1.component';
import { Parent2Component } from './Pages/parent2/parent2.component';
import { Parent3Component } from './Pages/parent3/parent3.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent1Component,
    Parent2Component,
    Parent3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
