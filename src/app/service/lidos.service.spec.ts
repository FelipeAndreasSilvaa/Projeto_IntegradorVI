import { TestBed } from '@angular/core/testing';

import { LidosService } from './lidos.service';

describe('LidosService', () => {
  let service: LidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
