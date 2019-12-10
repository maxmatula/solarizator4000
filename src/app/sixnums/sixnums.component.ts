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
  iteration = 0;
  howManyPlay = 1;
  winmodel: Winmodel;
  availiableNumbersUser = [];
  availiableNumbersLotto = [];
  ticketPrice: number;
  allGamesTicket: number;
  allTimeWinnings: number;

  constructor() {
    this.lottery = new Lottery();
    this.lotteriesHistory = new Array<Lottery>();
    this.winmodel = new Winmodel();
    this.ticketPrice = 3.00;
    this.allGamesTicket = 0;
    this.allTimeWinnings = 0;
  }

  ngOnInit() {
    this.resetLottoNumbers();
  }

  clear() {
    this.lottery = new Lottery();
    this.lotteriesHistory = new Array<Lottery>();
    this.winmodel = new Winmodel();
    this.winCount = 0;
    this.iteration = 0;
    this.allGamesTicket = 0;
    this.allTimeWinnings = 0;
  }

  resetLottoNumbers() {
    this.availiableNumbersUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
      33, 34, 35, 36, 37, 38, 39, 40];
    this.availiableNumbersLotto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
      33, 34, 35, 36, 37, 38, 39, 40];
  }

  lotto(times: number) {
    for (let i = 0; i < times; i++) {
      setTimeout(() => {
        let matchCount = 0;
        this.lottery.userNumbers = this.generateSixnumUser();
        this.lottery.lotteryNumbers = this.generateSixnumLotto();
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
          this.allTimeWinnings += 2000000;
        }

        if (matchCount === 1) {
          this.winmodel.ones += 1;
        }

        if (matchCount === 2) {
          this.winmodel.twos += 1;
        }

        if (matchCount === 3) {
          this.winmodel.threes += 1;
          this.allTimeWinnings += 24;
        }

        if (matchCount === 4) {
          this.winmodel.fours += 1;
          this.allTimeWinnings += 268;
        }

        if (matchCount === 5) {
          this.winmodel.fives += 1;
          this.allTimeWinnings += 6510;
        }

        this.lottery.machCount = matchCount;
        this.iteration += 1;
        this.lotteriesHistory.push(this.lottery);
        this.allGamesTicket += this.ticketPrice;
        this.resetLottoNumbers();
      }, 400);
    }
  }

  private generateNumberUser() {
    const num = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
    if (this.availiableNumbersUser.some(x => x === num)) {
      this.availiableNumbersUser = this.availiableNumbersUser.filter(x => x !== num);
      return num;
    } else {
      this.generateNumberUser();
    }
  }

  private generateNumberLotto() {
    const num = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
    if (this.availiableNumbersLotto.some(x => x === num)) {
      this.availiableNumbersLotto = this.availiableNumbersLotto.filter(x => x !== num);
      return num;
    } else {
      this.generateNumberUser();
    }
  }

  private generateSixnumUser() {
    const six = [this.generateNumberUser(),
    this.generateNumberUser(), this.generateNumberUser(),
    this.generateNumberUser(), this.generateNumberUser(),
    this.generateNumberUser()];

    return six;
  }

  private generateSixnumLotto() {
    const six = [this.generateNumberLotto(),
    this.generateNumberLotto(), this.generateNumberLotto(),
    this.generateNumberLotto(), this.generateNumberLotto(),
    this.generateNumberLotto()];

    return six;
  }

}
