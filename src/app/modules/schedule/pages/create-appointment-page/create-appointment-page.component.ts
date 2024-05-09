import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { AppointmentType } from 'src/app/core/models/appointment-type';
import { Area } from 'src/app/core/models/area';
import { Client } from 'src/app/core/models/client';
import { Professional } from 'src/app/core/models/professional';
import { AppointmentTypeService } from 'src/app/core/services/appointment-type.service';
import { AreaService } from 'src/app/core/services/area.service';
import { ClientService } from 'src/app/core/services/client.service';
import { FormCreateAppointmentComponent } from '../../components/form-create-appointment/form-create-appointment.component';
import { ProfessionalService } from 'src/app/core/services/professional.service';
import { Time } from '../../components/time/models/time';
import { Appointment } from 'src/app/core/models/appointment';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-create-appointment-page',
  templateUrl: './create-appointment-page.component.html',
  styleUrls: ['./create-appointment-page.component.css']
})
export class CreateAppointmentPageComponent implements OnInit {

  areas: Area[] = [];
  appointmentTypes: AppointmentType[] = [];
  professionalsByArea: Professional[] = [];
  selectedProfessional: Professional = {} as Professional;
  appointment !: Appointment;

  //Calendar Component
  calendarMonth: Date = new Date();
  availableDays: number[] = [];
  selectedDate !: Date;
  calendarError: string = "";

  //Time Component
  availableTimes: Time[] = [];
  selectedTime !: Time;
  timeError: string = "";

  @ViewChild(FormCreateAppointmentComponent)
  private formCreateAppointmentComponent !: FormCreateAppointmentComponent;

  constructor(private areaService: AreaService,
              private appointmentTypeService: AppointmentTypeService,
              private clientService: ClientService,
              private professionalService: ProfessionalService,
              private appointmentService: AppointmentService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadAreas();
    this.loadAppointmentTypes();
  }

  onSelectedTime(time: Time) {
    this.selectedTime = time;
    this.timeError = "";
  }

  loadAvailableTimes() {
    this.professionalService.getAvailableTimes(this.selectedProfessional, this.selectedDate).subscribe({
      next: times => this.availableTimes = times
    });
  }

  onSelectedProfessional(professional: Professional) {
    this.selectedProfessional = professional;
    this.calendarMonth = new Date();
    this.loadAvailableDays();
    this.availableTimes = [];
  }

  onSelectedDate(date: Date) {
    this.selectedDate = date;
    this.calendarError = "";
    this.loadAvailableTimes();
  }

  onChangedMonth(date: Date) {
    this.calendarMonth = date;
    this.loadAvailableDays();
    this.availableTimes = [];
  }

  loadAvailableDays() {
    this.professionalService.getAvailableDays(this.selectedProfessional, this.calendarMonth).subscribe({
      next: days => this.availableDays = days
    });
  }

  searchClients = (text: Observable<string>): Observable<Client[]> => {
    return text.pipe(
			debounceTime(200),
      distinctUntilChanged(),
      filter(term => term.length >= 2),
			switchMap(term => this.clientService.getClientsWithNameContaining(term))
		);
  }

  loadAppointmentTypes() {
    this.appointmentTypeService.getAppointmentTypes().subscribe({
      next: types => {this.appointmentTypes = types}
    })
  }

  loadAreas() {
    this.areaService.getAreas().subscribe({
      next: areas => {this.areas = areas}
    })
  }

  onSelectedArea(area: Area) {
    this.areaService.getActiveProfessionalsFromArea(area).subscribe({
      next: professionals => {
        this.professionalsByArea = professionals;
       }
    });

    this.availableDays = [];
    this.availableTimes = [];
  }

  clean() {
    this.formCreateAppointmentComponent.cleanForm();
    this.availableDays = [];
    this.availableTimes = [];
    this.appointment = {} as Appointment;
  }

  createAppointment(modalConfirm: ModalComponent) {
    this.formCreateAppointmentComponent.submited = true;
    this.checkDateAndTimeErrors();

    if (this.isAppointmentValid()) {
      this.appointment = this.createAppointmentObject();

      modalConfirm.open({ size: "lg" }).then(confirm => {
        if (confirm) {
          this.appointmentService.save(this.appointment).subscribe({
            next: () => {
              this.toastService.show("Agendamento Criado com sucesso!", { classname: "bg-success text-light" });
              this.clean();
            },
            error: () => {
              this.toastService.show("Erro ao Fazer o Agendamento!", { classname: "bg-danger text-light" })
            }
          })
        }
      });
    }
  }

  private createAppointmentObject(): Appointment{
    let appointment: Appointment = {} as Appointment;
    
    appointment = { ... this.formCreateAppointmentComponent.appointmentForm.value };
    appointment.startTime = this.selectedTime.startTime;
    appointment.endTime = this.selectedTime.endTime;
    appointment.date = this.selectedDate;

    return appointment;
  }

  private checkDateAndTimeErrors(): void{
    if (!this.selectedDate) {
      this.calendarError = "*Selecione uma data!";
    }

    if (!this.selectedTime) {
      this.timeError = "*Selecione um horário!";
    }
  }

  private isAppointmentValid(): boolean{
    return !!(this.formCreateAppointmentComponent.appointmentForm.valid && this.selectedDate && this.selectedTime);
  }
}