import { TestBed } from '@angular/core/testing';

import { AreaService } from './area.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AreaService', () => {
  let service: AreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
