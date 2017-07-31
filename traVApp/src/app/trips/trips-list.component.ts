import { Component, OnInit } from '@angular/core';
import { TripService } from './trips.service';

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
  constructor
    (private tripService: TripService) {

    }
  ngOnInit() {
    this.trips = this.tripService.getTrips()
  }
}
