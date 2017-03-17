/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipService } from './tip-service.service';

describe('TipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipService]
    });
  });

  it('should ...', inject([TipService], (service: TipService) => {
    expect(service).toBeTruthy();
  }));
});
