import { TestBed } from '@angular/core/testing';

import { AppointmentTypeService } from './appointment-type.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppointmentTypeService', () => {
  let service: AppointmentTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AppointmentTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
