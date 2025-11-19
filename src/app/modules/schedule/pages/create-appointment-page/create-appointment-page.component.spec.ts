import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppointmentPageComponent } from './create-appointment-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { FormCreateAppointmentComponent } from '../../components/form-create-appointment/form-create-appointment.component';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { TimeComponent } from '../../components/time/time.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { TimePipe } from 'src/app/shared/pipes/time.pipe';

describe('CreateAppointmentPageComponent', () => {
  let component: CreateAppointmentPageComponent;
  let fixture: ComponentFixture<CreateAppointmentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateAppointmentPageComponent,
        FormCreateAppointmentComponent,
        CalendarComponent,
        TimeComponent,
        ModalComponent,
        TimePipe
      ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        NgbTypeahead
      ],
      providers: [
        DatePipe  
      ]
    });
    fixture = TestBed.createComponent(CreateAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
