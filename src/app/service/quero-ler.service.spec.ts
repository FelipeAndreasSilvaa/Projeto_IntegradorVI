import { TestBed } from '@angular/core/testing';

import { QueroLerService } from './quero-ler.service';

describe('QueroLerService', () => {
  let service: QueroLerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueroLerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
