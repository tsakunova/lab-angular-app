import {TestBed} from '@angular/core/testing';

import {CoctailsService} from './coctails.service';

describe('CoctailsService', () => {
  let service: CoctailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
