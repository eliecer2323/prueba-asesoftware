import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mecanico } from '../models/mecanico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  constructor(private httpClient: HttpClient) { }

  public getMecanicosPrioritarios(): Observable<Mecanico[]> {
    return this.httpClient.get<Mecanico[]>('http://localhost:8080/mecanicos/');
  }

  public postMecanico(mecanico: Mecanico): Observable<Mecanico[]> {
    return this.httpClient.post<Mecanico[]>('http://localhost:8080/mecanicos/', mecanico);
  }

  

}
