import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalWorkdaysPageComponent } from './professional-workdays-page.component';

describe('ProfessionalWorkdaysPageComponent', () => {
  let component: ProfessionalWorkdaysPageComponent;
  let fixture: ComponentFixture<ProfessionalWorkdaysPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalWorkdaysPageComponent]
    });
    fixture = TestBed.createComponent(ProfessionalWorkdaysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
