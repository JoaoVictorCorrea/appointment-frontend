import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Area } from '../models/area';
import { Observable } from 'rxjs';
import { Professional } from '../models/professional';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  baseUrl = "http://localhost:3000/areas";

  constructor(private http: HttpClient) { }

  getAreas(): Observable<Area[]>{

    return this.http.get<Area[]>(this.baseUrl);
  }

  getProfessionalsFromArea(area: Area): Observable<Professional[]>{
    let url = `${this.baseUrl}/${area.id}/professionals`;

    return this.http.get<Professional[]>(url);
  }

  getActiveProfessionalsFromArea(area: Area): Observable<Professional[]>{
    let url = `${this.baseUrl}/${area.id}/professionals?active=true`;

    return this.http.get<Professional[]>(url);
  }
}
