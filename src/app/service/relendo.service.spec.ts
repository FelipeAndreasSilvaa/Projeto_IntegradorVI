import { TestBed } from '@angular/core/testing';

import { RelendoService } from './relendo.service';

describe('RelendoService', () => {
  let service: RelendoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelendoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
