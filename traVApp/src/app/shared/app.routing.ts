import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TripListComponent } from '../trips/trips-list.component';


const appRoutes: Routes = [
  { path: '', component: TripListComponent }
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
