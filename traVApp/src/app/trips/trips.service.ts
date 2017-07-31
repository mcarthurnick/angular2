import { Injectable } from '@angular/core'

@Injectable()
export class TripService {
  getTrips() {
    return TRIPS
  }
}

const TRIPS = [
  {
    id: 1,
    name: 'Carribean Getaway',
    date: '11/15/2017',
    location: 'St. Thomas, USVI',
    length: 13,
    amountToSave: 2500.00,
    totalSaved: 450.00,
    imageUrl: '/app/assets/images/marriot-st-thomas.jpg'
  },
  {
    id: 2,
    name: 'Birthday Adventure',
    date: '09/01/2017',
    location: 'Salt Lake City, UT',
    length: 3,
    amountToSave: 600.00,
    totalSaved: 0,
    imageUrl: '/app/assets/images/marriot-st-thomas.jpg'
  },
  {
    id: 3,
    name: 'Europe',
    date: '06/21/2018',
    location: 'Rome, Italy',
    length: 24,
    amountToSave: 12000.00,
    totalSaved: 0,
    imageUrl: '/app/assets/images/marriot-st-thomas.jpg'
  },
  {
    id: 4,
    name: 'Suprise Cruise',
    date: '02/12/2018',
    location: 'San Diego, CA',
    length: 3,
    amountToSave: 900.00,
    totalSaved: 0,
    imageUrl: '/app/assets/images/marriot-st-thomas.jpg'
  }
]
