import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AreaPageComponent } from './pages/area-page/area-page.component';
import { ProfessionalPageComponent } from './pages/professional-page/professional-page.component';
import { AppointmentTypePageComponent } from './pages/appointment-type-page/appointment-type-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';


@NgModule({
  declarations: [
    AreaPageComponent,
    ProfessionalPageComponent,
    AppointmentTypePageComponent,
    ClientPageComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }
