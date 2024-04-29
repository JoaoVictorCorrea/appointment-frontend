import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OperatorFunction } from 'rxjs';
import { AppointmentType } from 'src/app/core/models/appointment-type';
import { Area } from 'src/app/core/models/area';
import { Client } from 'src/app/core/models/client';
import { Professional } from 'src/app/core/models/professional';

@Component({
  selector: 'app-form-create-appointment',
  templateUrl: './form-create-appointment.component.html',
  styleUrls: ['./form-create-appointment.component.css']
})
export class FormCreateAppointmentComponent {

  @Input()
  areas: Area[] = [];

  @Input()
  appointmentTypes: AppointmentType[] = [];

  @Input()
  professionals: Professional[] = [];

  @Input()
  searchClients !: OperatorFunction<string, readonly Client[]>

  @Output()
  selectedAreaEvent = new EventEmitter<Area>();

  submited: boolean = false;

  appointmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.appointmentForm = this.formBuilder.group({
      area: ['', Validators.required],
      professional: [{value: '', disabled: true}, Validators.required],
      appointmentType: ['', Validators.required],
      client: ['', Validators.required],
      comments: ['']
    });
  }

  //Used by typeahead component
  formatter = (client: Client) => client.name;

  onAreaChanged() {
    this.selectedAreaEvent.emit(this.appointmentForm.value["area"]);
    this.appointmentForm.controls["professional"].enable();
  }

  getSelectedClient(): Client{
    return this.appointmentForm.controls["client"].value
  }

  get afArea() {
    return this.appointmentForm.get('area');
  }

  get afProfessional() {
    return this.appointmentForm.get('professional');
  }

  get afAppointmentType() {
    return this.appointmentForm.get('appointmentType');
  }

  get afClient() {
    return this.appointmentForm.get('client');
  }
}
