import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TripListComponent } from './trips/trips-list.component';
import { AppRoutingModule } from './app.routing';
import { TripDetailComponent } from './trips/trips-detail.component';
import { NavBarComponent } from './nav/navbar.component';
import { TripService } from './trips/trips.service';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './shared/login.service';
import { AuthService } from './shared/auth.service';

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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [TripService, LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
