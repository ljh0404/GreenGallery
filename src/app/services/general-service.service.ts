import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Datum, RootObject } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { RootObject2 } from '../interfaces/plantInterface';
import { SearchObject } from '../interfaces/searchInterface';
import { FamilyObject } from '../interfaces/familyInterface';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  private apiUrl = '/api/v1/species?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=';

  private apiUrl_specie = '?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&';

  private searchUrl = '/api/v1/plants/search?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&q=';

  private familiesUrl = '/api/v1/families?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=30';

  constructor(private http: HttpClient) { }

  obtenerDatos(pageNumber: string): Observable<RootObject> {
    return this.http.get<RootObject>(this.apiUrl+ pageNumber);
  }

  getSpecieData(specie: string) :Observable<RootObject2> {
    return this.http.get<RootObject2>(specie + this.apiUrl_specie)
  }

  searchData(seachText:string) : Observable<SearchObject> {
    return this.http.get<SearchObject>(this.searchUrl+seachText);
  }

  getAllFamilies() :Observable<FamilyObject> {
    return this.http.get<FamilyObject>(this.familiesUrl);
  }

  private favorites = signal<Datum[]>([]);

  getFavorites(){
    return this.favorites();
  }

  addFavorites(data: Datum) {
    if (!this.isDuplicate(data)) {
      this.favorites.mutate(values => values.push(data));
    }
  }
  
  private isDuplicate(data: Datum): boolean {
    return this.favorites() && this.favorites().some(item => item.id === data.id);
  }
}
