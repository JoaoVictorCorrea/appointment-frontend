import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalFormPageComponent } from './professional-form-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProfessionalFormPageComponent', () => {
  let component: ProfessionalFormPageComponent;
  let fixture: ComponentFixture<ProfessionalFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalFormPageComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [DatePipe]
    });
    fixture = TestBed.createComponent(ProfessionalFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
