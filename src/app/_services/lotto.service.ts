import { Injectable } from '@angular/core';
import { Winmodel } from '../_models/winmodel';

@Injectable({
  providedIn: 'root'
})
export class LottoService {

  constructor() { }

  generateSixNumbersFromFourty() {
    return [...Array(39).keys()]
      .map(x => x + 1)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  }

  getNumbersMatch(lottoNumbers: number[], userNumbers: number[]) {
    return lottoNumbers.filter(x => userNumbers.includes(x)).length;
  }

  getPriceFromMatch(match: number) {
    switch (match) {
      case 1: return 0;
      case 2: return 0;
      case 3: return 24;
      case 4: return 268;
      case 5: return 6510;
      case 6: return 2000000;
    }

    return 0;
  }

  addWinmodelWinnings(match: number, winmodel: Winmodel) {
    switch (match) {
      case 1: winmodel.ones += 1; break;
      case 2: winmodel.twos += 1; break;
      case 3: winmodel.threes += 1; break;
      case 4: winmodel.fours += 1; break;
      case 5: winmodel.fives += 1; break;
      case 6: winmodel.sixes += 1; break;
    }

    return 0;
  }

}
