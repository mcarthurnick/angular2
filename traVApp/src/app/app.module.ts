import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TripListComponent } from './trips/trips-list.component';
import { AppRoutingModule } from './shared/app.routing';
@NgModule({
  declarations: [
    AppComponent,
    TripListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
