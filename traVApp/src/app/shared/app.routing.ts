import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripListComponent } from '../trips/trips-list.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const appRoutes: Routes = [
  { path: '', component: TripListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
