import { Component } from '@angular/core';

@Component ({
  selector: 'trip-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})

export class TripListComponent {
  trip = {
    name: 'Carribean Getaway',
    date: '11/15/2017',
    location: 'St. Thomas, USVI',
    length: 13,
    amountToSave: 1500.00,
    totalSaved: 450.00,
    imageUrl: '/app/assets/images/marriot-st-thomas.jpg'
  }
}
