import { Component, OnInit } from '@angular/core';
import { Lottery } from '../_models/Lottery';
import { Winmodel } from '../_models/winmodel';

@Component({
  selector: 'app-sixnums',
  templateUrl: './sixnums.component.html',
  styleUrls: ['./sixnums.component.css']
})
export class SixnumsComponent implements OnInit {
  lottery: Lottery;
  lotteriesHistory: Lottery[];
  minNumber = 1;
  maxNumber = 40;
  winCount = 0;
  iteration = 1;
  howManyPlay = 1;
  winmodel: Winmodel;

  constructor() {
    this.lottery = new Lottery();
    this.lotteriesHistory = new Array<Lottery>();
    this.winmodel = new Winmodel();
  }

  ngOnInit() {
  }

  clear() {
    this.lottery = new Lottery();
    this.lotteriesHistory = new Array<Lottery>();
    this.winmodel = new Winmodel();
    this.winCount = 0;
    this.iteration = 0;
  }

  lotto(times: number) {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        let matchCount = 0;
        this.lottery.userNumbers = this.generateSixnum();
        this.lottery.lotteryNumbers = this.generateSixnum();
        this.lottery.iteration = this.iteration;

        this.lottery.lotteryNumbers.forEach(lottNum => {
          this.lottery.userNumbers.forEach(usrNum => {
            if (lottNum === usrNum) {
              matchCount += 1;
            }
          });
        });

        if (matchCount === 6) {
          this.winCount += 1;
        }

        if (matchCount === 1) {
          this.winmodel.ones += 1;
        }

        if (matchCount === 2) {
          this.winmodel.twos += 1;
        }

        if (matchCount === 3) {
          this.winmodel.threes += 1;
        }

        if (matchCount === 4) {
          this.winmodel.fours += 1;
        }

        if (matchCount === 5) {
          this.winmodel.fives += 1;
        }

        this.lottery.machCount = matchCount;
        this.iteration += 1;
        this.lotteriesHistory.push(this.lottery);
      }, 400);
    }
  }

  private generateNumber() {
    const num = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
    return num;
  }

  private generateSixnum() {
    const six = [this.generateNumber(),
    this.generateNumber(), this.generateNumber(),
    this.generateNumber(), this.generateNumber(),
    this.generateNumber()];

    return six;
  }

}
