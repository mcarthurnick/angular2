import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TripListComponent } from './trips/trips-list.component';
import { AppRoutingModule } from './shared/app.routing';
import { TripDetailComponent } from './trips/trips-detail.component';
import { NavBarComponent } from './nav/navbar.component';
import { TripService } from './trips/trips.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripDetailComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
