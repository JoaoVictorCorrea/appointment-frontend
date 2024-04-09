import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPageComponent } from './professional-page.component';

describe('ProfessionalPageComponent', () => {
  let component: ProfessionalPageComponent;
  let fixture: ComponentFixture<ProfessionalPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalPageComponent]
    });
    fixture = TestBed.createComponent(ProfessionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
