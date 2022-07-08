import { TestBed } from '@angular/core/testing';

import { MybarService } from './mybar.service';

describe('MybarService', () => {
  let service: MybarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
