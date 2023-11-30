import { TestBed } from '@angular/core/testing';

import { AbandoneiService } from './abandonei.service';

describe('AbandoneiService', () => {
  let service: AbandoneiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbandoneiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
