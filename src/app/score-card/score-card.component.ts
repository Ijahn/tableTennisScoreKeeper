import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
  names: AppComponent;
  title = 'table-tennis-score-keeper';
  pointsPlayerOne = 0;
  pointsPlayerTwo = 0;
  playerOneSetScore = 0;
  playerTwoSetScore = 0;
  duceWinnerMargin = 2;

  @Input() newPlayerOneName: string;
  @Input() newPlayerTwoName: string;


  addPointPlayerOne(): number {
    this.pointsPlayerOne += 1;
    return this.pointsPlayerOne;
  }

  addPointPlayerTwo(): number {
    this.pointsPlayerTwo += 1;
    return this.pointsPlayerTwo;
  }

  getPointsDif(): number {
    const diff = this.pointsPlayerOne - this.pointsPlayerTwo;
    return diff;
  }

  determineWinningMargin() {
    // if (this.pointsPlayerOne > 11 && ((this.playerOneSetScore - this.playerTwoSetScore) >= 2)) {
    //   this.playerOneSetScore += 1;
    // }
    // if (this.pointsPlayerOne === 11) {
    //   this.playerOneSetScore += 1;
    // }
    if (this.pointsPlayerOne >= 11 && this.getPointsDif() >= 2) {
      this.playerOneSetScore += 1;
      this.pointsPlayerOne = 0;
      this.pointsPlayerTwo = 0;
    }
  }

  // updatePlayerOneSetScore() {
  //   if (this.pointsPlayerOne === 11 && this.duceWinnerMargin < 2) {
  //     this.playerOneSetScore += 1;
  //   }
  // }

  // updatePlayerTwoSetScore() {
  //   if (this.pointsPlayerTwo === 11) {
  //     this.playerTwoSetScore += 1;
  //   }
  // }

  reset() {
    this.pointsPlayerOne = 0;
    this.pointsPlayerTwo = 0;
  }

  resetAll() {
    this.pointsPlayerOne = 0;
    this.pointsPlayerTwo = 0;
    this.playerOneSetScore = 0;
    this.playerTwoSetScore = 0;
  }

  onNotify() {
    window.alert('hello');
  }
  constructor() { }

  ngOnInit() {
  }

}
