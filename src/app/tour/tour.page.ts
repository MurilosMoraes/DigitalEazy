import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss'],
})
export class TourPage implements OnInit {

  tourA = true
  tourB = false
  tourC = false
  tourD = false
  tourE = false
  tourF = false

  constructor() { }

  openTourA() {
    this.tourA = true
    this.tourB = false
    this.tourC = false
    this.tourD = false
    this.tourE = false
    this.tourF = false
  }
  openTourB() {
    this.tourA = false
    this.tourB = true
    this.tourC = false
    this.tourD = false
    this.tourE = false
    this.tourF = false
  }
  openTourC() {
    this.tourA = false
    this.tourB = false
    this.tourC = true
    this.tourD = false
    this.tourE = false
    this.tourF = false
  }
  openTourD() {
    this.tourA = false
    this.tourB = false
    this.tourC = false
    this.tourD = true
    this.tourE = false
    this.tourF = false
  }
  openTourE() {
    this.tourA = false
    this.tourB = false
    this.tourC = false
    this.tourD = false
    this.tourE = true
    this.tourF = false
  }
  openTourF() {
    this.tourA = false
    this.tourB = false
    this.tourC = false
    this.tourD = false
    this.tourE = false
    this.tourF = true
  }

  ngOnInit() {
  }

}
