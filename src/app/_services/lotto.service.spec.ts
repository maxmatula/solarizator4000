/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LottoService } from './lotto.service';

describe('Service: Lotto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LottoService]
    });
  });

  it('should ...', inject([LottoService], (service: LottoService) => {
    expect(service).toBeTruthy();
  }));
});
