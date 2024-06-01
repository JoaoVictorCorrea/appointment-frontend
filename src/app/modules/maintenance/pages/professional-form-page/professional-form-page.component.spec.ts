import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalFormPageComponent } from './professional-form-page.component';

describe('ProfessionalFormPageComponent', () => {
  let component: ProfessionalFormPageComponent;
  let fixture: ComponentFixture<ProfessionalFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalFormPageComponent]
    });
    fixture = TestBed.createComponent(ProfessionalFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
