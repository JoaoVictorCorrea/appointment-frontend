import { Injectable } from '@angular/core';
import { Professional } from '../models/professional';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  baseUrl = "http://localhost:3000/professionals"

  constructor(private http: HttpClient) { }

  getAvailableDays(professional: Professional, calendar: Date): Observable<number[]>{
    let month = calendar.getMonth() + 1;
    let year = calendar.getFullYear();

    let url = `${this.baseUrl}/${professional.id}/availability-days?year=${year}&month=${month}`;

    //TODO Replace this when backend available
    //return this.http.get<number[]>(url);

    return of([Math.floor(Math.random() * 20) + 1,
               Math.floor(Math.random() * 20) + 1,
               Math.floor(Math.random() * 20) + 1,
               Math.floor(Math.random() * 20) + 1,
               Math.floor(Math.random() * 20) + 1
    ]);
  }
}
