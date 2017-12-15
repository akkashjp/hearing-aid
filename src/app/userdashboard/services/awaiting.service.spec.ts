import { TestBed, inject } from '@angular/core/testing';

import { AwaitingService } from './awaiting.service';

describe('AwaitingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwaitingService]
    });
  });

  it('should be created', inject([AwaitingService], (service: AwaitingService) => {
    expect(service).toBeTruthy();
  }));
});
