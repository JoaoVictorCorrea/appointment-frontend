import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3000/clients"

  constructor(private http: HttpClient) { }

  getClients(clientNameFilter: string, page: number): Observable<HttpResponse<Client[]>>{
    let url = `${this.baseUrl}?name_like=${clientNameFilter}&_page=${page}&_limit=10&_sort=name`;

    return this.http.get<Client[]>(url, {observe: 'response'});
  }

  deleteClient(client: Client): Observable<void> {
    let url = `${this.baseUrl}/${client.id}`;
    
    return this.http.delete<void>(url);
  }
}
