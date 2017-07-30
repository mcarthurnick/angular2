import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TripListComponent } from '../trips/trips-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: TripListComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
