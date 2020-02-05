import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public gameNumberArr: number[];
  private timeoutRef: number;

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {

    this.resetNumberArr();

    this.timeoutRef = setInterval(() => {
      this.addNewNumber();
    }, 1000);

  }

  stopGame() {
    clearInterval(this.timeoutRef);
  }

  private resetNumberArr() {
    this.gameNumberArr = [];
  }

  private addNewNumber() {
    this.gameNumberArr.push(Math.floor(Math.random()*100));
  }

}
