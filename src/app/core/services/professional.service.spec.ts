import { TestBed } from '@angular/core/testing';

import { ProfessionalService } from './professional.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';

describe('ProfessionalService', () => {
  let service: ProfessionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatePipe]
    });
    service = TestBed.inject(ProfessionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
