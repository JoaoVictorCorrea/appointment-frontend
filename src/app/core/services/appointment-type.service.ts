import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentType } from '../models/appointment-type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentTypeService {

  baseUrl = environment.baseUrl + "/appointment-types";

  constructor(private http: HttpClient) { }

  getAppointmentTypes(): Observable<AppointmentType[]>{

    return this.http.get<AppointmentType[]>(this.baseUrl);
  }
}
