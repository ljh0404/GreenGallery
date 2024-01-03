import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Datum, DatumLinks, RootObject } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { RootObject2 } from '../interfaces/plantInterface';
import { SearchObject } from '../interfaces/searchInterface';
import { FamilyObject } from '../interfaces/familyInterface';
import { GenusObject } from '../interfaces/genusInterface';
import { PlantsObject } from '../interfaces/plantsByGenusInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {
  private apiUrl1 = '/api/auth/claim';
  private trefleToken = 'dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o';

  private apiUrl = '/api/v1/species?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=';

  private apiUrl_specie = '?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&';

  private searchUrl = '/api/v1/plants/search?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&q=';

  private familiesUrl = '/api/v1/families?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page=';

  private genusUrl = '?token=dFyYL65yF8C_M9Y7ArXytbxj5olI0-Sw7wfmy5klD5o&page='

  constructor(private http: HttpClient) { }

  obtenerDatos(pageNumber: number): Observable<RootObject> {
    return this.http.get<RootObject>(environment.url+this.apiUrl+ pageNumber);
  }

  getSpecieData(specie: string) :Observable<RootObject2> {
    return this.http.get<RootObject2>(environment.url+specie + this.apiUrl_specie)
  }

  searchData(seachText:string, page: number) : Observable<SearchObject> {
    return this.http.get<SearchObject>(environment.url+this.searchUrl+seachText+'&page='+ page);
  }

  getAllFamilies(page: number) :Observable<FamilyObject> {
    return this.http.get<FamilyObject>(environment.url+this.familiesUrl+page);
  }

  getGenusByFamily(family: string, page: number) : Observable<GenusObject> {
    return this.http.get<GenusObject>(family + this.genusUrl+ page);
  } 

  getPlantsByGenus(genus: string, page: number) :Observable<PlantsObject>{
    return this.http.get<PlantsObject>(genus + this.genusUrl+ page);
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


  claimAuthorization(origin: string, ip: string): Observable<any> {
    const params = {
      origin,
      ip,
      token: this.trefleToken
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiUrl1, params, { headers });
  }
}
