import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = "http://localhost:3000/appointments";

  constructor(private http: HttpClient) { }

  save(appointment: Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(this.baseUrl, appointment);
  }
}
