import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripListComponent } from './trips/trips-list.component';
import { AppRoutingModule } from './shared/app.routing';
import { TripDetailComponent } from './trips/trips-detail.component';
import { NavBarComponent } from './nav/navbar.component';
import { TripService } from './trips/trips.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './shared/login.service';

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripDetailComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TripService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
