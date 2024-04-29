import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentType } from '../models/appointment-type';

@Injectable({
  providedIn: 'root'
})
export class AppointmentTypeService {

  baseUrl = "http://localhost:3000/appointment-types";

  constructor(private http: HttpClient) { }

  getAppointmentTypes(): Observable<AppointmentType[]>{

    return this.http.get<AppointmentType[]>(this.baseUrl);
  }
}
