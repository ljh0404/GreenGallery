import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datum, RootObject } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { RootObject2 } from '../interfaces/plantInterface';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  private apiUrl = '/api/v1/species?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=';

  private apiUrl_specie = '?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&';

  constructor(private http: HttpClient) { }

  obtenerDatos(pageNumber: string): Observable<RootObject> {
    return this.http.get<RootObject>(this.apiUrl+ pageNumber);
  }

  getSpecieData(specie: string) :Observable<RootObject2> {
    return this.http.get<RootObject2>(specie + this.apiUrl_specie)
  }
}
