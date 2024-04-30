import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { TodayAppointmentsPageComponent } from './pages/today-appointments-page/today-appointments-page.component';
import { CreateAppointmentPageComponent } from './pages/create-appointment-page/create-appointment-page.component';
import { CancelAppointmentPageComponent } from './pages/cancel-appointment-page/cancel-appointment-page.component';
import { ClientHistoryPageComponent } from './pages/client-history-page/client-history-page.component';
import { ProfessionalWorkdaysPageComponent } from './pages/professional-workdays-page/professional-workdays-page.component';
import { FormCreateAppointmentComponent } from './components/form-create-appointment/form-create-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    TodayAppointmentsPageComponent,
    CreateAppointmentPageComponent,
    CancelAppointmentPageComponent,
    ClientHistoryPageComponent,
    ProfessionalWorkdaysPageComponent,
    FormCreateAppointmentComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ScheduleModule { }
