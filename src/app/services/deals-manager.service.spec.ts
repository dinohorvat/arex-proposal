import { TestBed } from '@angular/core/testing';

import { DealsManagerService } from './deals-manager.service';

describe('DealsManagerService', () => {
  let service: DealsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
