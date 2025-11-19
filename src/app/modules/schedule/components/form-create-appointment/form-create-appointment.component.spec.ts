import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateAppointmentComponent } from './form-create-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

describe('FormCreateAppointmentComponent', () => {
  let component: FormCreateAppointmentComponent;
  let fixture: ComponentFixture<FormCreateAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCreateAppointmentComponent],
      imports: [
        ReactiveFormsModule,
        NgbTypeahead
      ]
    });
    fixture = TestBed.createComponent(FormCreateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
