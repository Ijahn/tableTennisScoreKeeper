import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  @Input() playerOneName: HTMLInputElement;
  @Input() playerTwoName: HTMLInputElement;
  @Input() one: HTMLInputElement;
  @Input() two: HTMLInputElement;
  constructor() { }



  addPlayers(player1: HTMLInputElement, player2: HTMLInputElement) {
    // console.log(`${player1.value} ${player2.value}`);
    return player1.value;
  }

  ngOnInit() {
  }

}
