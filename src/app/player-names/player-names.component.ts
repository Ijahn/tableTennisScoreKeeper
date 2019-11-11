import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-names',
  templateUrl: './player-names.component.html',
  styleUrls: ['./player-names.component.css']
})
export class PlayerNamesComponent implements OnInit {
  @Input() playerOneName: string;
  @Input() playerTwoName: string;
  // name = 'Ijahn';
  // playerOne = 'Ijahn';
  // playerTwo = 'Jason';

  constructor() { }

  ngOnInit() {
  }

}
