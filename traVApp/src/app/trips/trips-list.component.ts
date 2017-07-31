import { Component, OnInit } from '@angular/core';
import { TripService } from './trips.service';
import { ToastrService } from '../shared/toastr.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component ({
  selector: 'trip-list',
  template: `
    <div class="container-fluid">
      <h1>Upcoming Trips</h1>
      <hr />
      <div class="row">
        <div *ngFor="let trip of trips" class="col-md-12 pad-trip">
          <trip-detail (click)="showSuccess()" [trip]="trip"></trip-detail>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .pad-trip{
    padding: 10px;
  }
  `]
})

export class TripListComponent implements OnInit {
  trips: any[]
  constructor(
    private tripService: TripService,
    private toastr: ToastsManager) {

  }

  ngOnInit() {
    this.trips = this.tripService.getTrips()
  }

  private showSuccess(){
    	this.toastr.success("Success", 'You are on right track.');
	}
}
