import { Injectable } from '@angular/core';
import { Professional } from '../models/professional';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Time } from 'src/app/modules/schedule/components/time/models/time';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  baseUrl = environment.baseUrl + "/professionals"

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getProfessionals(professionalNameFilter: string, page: number): Observable<Page<Professional>>{

    let url = `${this.baseUrl}?name_like=${professionalNameFilter}&_page=${page}&_limit=10&_sort=name`;
    
    return this.http.get<Page<Professional>>(url);
  }

  getProfessionalById(id: number): Observable<Professional>{
    let url = `${this.baseUrl}/${id}`;

    return this.http.get<Professional>(url);
  }

  save(professional: Professional): Observable<void>{
    return this.http.post<void>(this.baseUrl, professional);
  }

  update(professional: Professional): Observable<void>{
    let url = `${this.baseUrl}/${professional.id}`;

    return this.http.put<void>(url, professional);
  }

  deleteProfessional(professional: Professional): Observable<void> {
    let url = `${this.baseUrl}/${professional.id}`;
    
    return this.http.delete<void>(url);
  }

  getAvailableDays(professional: Professional, calendar: Date): Observable<number[]>{
    let month = calendar.getMonth() + 1;
    let year = calendar.getFullYear();

    let url = `${this.baseUrl}/${professional.id}/availability-days?year=${year}&month=${month}`;

    return this.http.get<number[]>(url);
  }

  getAvailableTimes(professional: Professional, date: Date): Observable<Time[]>{

    let url = `${this.baseUrl}/${professional.id}/availability-times?date=${this.datePipe.transform(date, 'yyyy-MM-dd')}`;

    return this.http.get<Time[]>(url);
  }
}
