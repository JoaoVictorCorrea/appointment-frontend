import { TestBed } from '@angular/core/testing';

import { AppointmentService } from './appointment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppointmentService', () => {
  let service: AppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
