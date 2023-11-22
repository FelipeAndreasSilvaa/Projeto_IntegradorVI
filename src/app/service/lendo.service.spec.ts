import { TestBed } from '@angular/core/testing';

import { LendoService } from './lendo.service';

describe('LendoService', () => {
  let service: LendoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LendoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
