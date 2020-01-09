import { Component, OnInit } from '@angular/core';
import { Lottery } from '../_models/Lottery';
import { Winmodel } from '../_models/winmodel';
import { LottoService } from '../_services/lotto.service';

@Component({
  selector: 'app-sixnums',
  templateUrl: './sixnums.component.html',
  styleUrls: ['./sixnums.component.css']
})
export class SixnumsComponent implements OnInit {
  lottery: Lottery;
  lotteriesHistory: Lottery[];

  iteration = 0;
  howManyPlay = 1;
  winmodel: Winmodel;
  ticketPrice: number;
  allGamesTicket: number;
  allTimeWinnings: number;

  constructor(private lottoService: LottoService) {
    this.lottery = new Lottery();
    this.lotteriesHistory = new Array<Lottery>();
    this.winmodel = new Winmodel();
    this.ticketPrice = 3.00;
    this.allGamesTicket = 0;
    this.allTimeWinnings = 0;
  }

  ngOnInit() {
    this.clear();
  }

  clear() {
    this.lottery = new Lottery();
    this.lotteriesHistory = new Array<Lottery>();
    this.winmodel = new Winmodel();
    this.iteration = 0;
    this.allGamesTicket = 0;
    this.allTimeWinnings = 0;
  }

  startLottery(times: number) {
    while (times > 0) {
      this.lotto();
      times --;
    }
  }

  lotto() {
      setTimeout(() => {
        this.lottery = new Lottery();
        this.lottery.userNumbers = this.lottoService.generateSixNumbersFromFourty();
        this.lottery.lotteryNumbers = this.lottoService.generateSixNumbersFromFourty();
        this.lottery.iteration = this.iteration;

        const match = this.lottoService.getNumbersMatch(this.lottery.lotteryNumbers, this.lottery.userNumbers);

        const win = this.lottoService.getPriceFromMatch(match);
        this.allTimeWinnings += win;

        this.lottoService.addWinmodelWinnings(match, this.winmodel);

        this.lottery.machCount = match;
        this.iteration += 1;
        this.lotteriesHistory.push(this.lottery);
        this.allGamesTicket += this.ticketPrice;
      }, 20);
  }
}
