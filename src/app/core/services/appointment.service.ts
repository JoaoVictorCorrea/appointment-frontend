import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = environment.baseUrl + "/appointments";

  constructor(private http: HttpClient) { }

  save(appointment: Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(this.baseUrl, appointment);
  }
}
