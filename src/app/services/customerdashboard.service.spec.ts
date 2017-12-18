import { TestBed, inject } from '@angular/core/testing';

import { CustomerDashboardService } from './customerdashboard.service';

describe('AppointmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerDashboardService]
    });
  });

  it('should be created', inject([CustomerDashboardService], (service: CustomerDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
