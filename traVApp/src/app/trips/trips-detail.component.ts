import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'trip-detail',
  templateUrl: '/trips-detail.component.html',
  styles: [`
  .trip-container {
    background-color: #d1d1d1;
    padding: 30px;
    border-radius: 10px;
  }
  `]
})

export class TripDetailComponent {
  @Input() trip: any


}
