import { Injectable, signal } from '@angular/core';
import { Datum, RootObject } from '../interfaces/interfaces';
import { SearchObject } from '../interfaces/searchInterface';
import { FamilyObject } from '../interfaces/familyInterface';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  private initial = signal<RootObject>(undefined!);
  private initialNumber = signal<number>(0);
  private searchNumberPage = signal<number>(0!);
  private familyNumberPage = signal<number>(0!);

  getInitialPage(){
    return this.initial();
  }
  setInitialPage(data: RootObject){
    this.initial.set(data);
  }

  getInitialNumberPage(){
    return this.initialNumber();
  }
  setInitialNumberPage(data: number){
    this.initialNumber.set(data);
  }

  getSearchPageNumberPage(){
    return this.searchNumberPage();
  }
  setSearchPageNumberPage(data: number){
    this.searchNumberPage.set(data);
  }

  getFamilyPageNumber(){
    return this.familyNumberPage();
  }
  setFamilyPageNumber(data: number){
    this.familyNumberPage.set(data);
  }
  private searchText = signal<string>('');

  getSearchText(){
    return this.searchText();
  }
  setSearchText(data: string){
    this.searchText.set(data);
  }

  private resultSearch = signal<SearchObject>(undefined!);

  getResultSearch(){
    return this.resultSearch();
  }
  setResultSearch(data: SearchObject){
    this.resultSearch.set(data);
  }

  private familyResult = signal<FamilyObject>(undefined!);

  getFamilyResult(){
    return this.familyResult();
  }
  setFamilyResult(data: FamilyObject){
    this.familyResult.set(data);
  }
}
