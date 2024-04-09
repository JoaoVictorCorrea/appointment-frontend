import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayAppointmentsPageComponent } from './pages/today-appointments-page/today-appointments-page.component';
import { CreateAppointmentPageComponent } from './pages/create-appointment-page/create-appointment-page.component';
import { CancelAppointmentPageComponent } from './pages/cancel-appointment-page/cancel-appointment-page.component';
import { ClientHistoryPageComponent } from './pages/client-history-page/client-history-page.component';
import { ProfessionalWorkdaysPageComponent } from './pages/professional-workdays-page/professional-workdays-page.component';

const routes: Routes = [
  { path: 'today-appointments', component: TodayAppointmentsPageComponent },
  { path: 'create-appointment', component: CreateAppointmentPageComponent },
  { path: 'cancel-appointment', component: CancelAppointmentPageComponent },
  { path: 'client-history', component: ClientHistoryPageComponent },
  { path: 'professional-workdays', component: ProfessionalWorkdaysPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
