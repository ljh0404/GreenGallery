import { Component } from '@angular/core';
import { RootObject2 } from 'src/app/interfaces/plantInterface';
import { Datum } from 'src/app/interfaces/searchInterface';
import { SearchObject } from 'src/app/interfaces/searchInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { PersistenceService } from 'src/app/services/persistence.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  searchText!: string;
  showPaginator!: boolean;
  searchResult!: SearchObject;
  plantSelected!: RootObject2;
  visible: boolean = false;
  searchButton: boolean = true;
  lastPage!: number;
  pageSelected!: number;
  isLoading: boolean = false;

  constructor(private generalService: GeneralServiceService, private persistenceService: PersistenceService){}

  ngOnInit(){
    if (this.persistenceService.getResultSearch() != undefined){
      this.searchResult = this.persistenceService.getResultSearch();
      this.searchText = this.persistenceService.getSearchText();
      this.lastPage = parseInt(this.extractLastPage(this.searchResult.links.last)!);
      this.pageSelected = this.persistenceService.getSearchPageNumberPage();
    }
  }

  onClickSearch(){
    this.isLoading = true;
    this.generalService.searchData(this.searchText,1).subscribe(data => {
      this.searchResult = data;
      this.pageSelected = 1;
      this.lastPage = parseInt(this.extractLastPage(this.searchResult.links.last)!);
      this.persistenceService.setResultSearch(this.searchResult);
      this.persistenceService.setSearchText(this.searchText);
      this.persistenceService.setSearchPageNumberPage(1);
      this.isLoading = false;

      if (this.searchResult.data.length == 0)
        this.showPaginator = false;
      else
        this.showPaginator = true;
    });
  }

  onClickPlant(plant: Datum){
    this.generalService.getSpecieData(plant.slug).subscribe((data)=> {
      this.plantSelected = data;
      this.visible = true;
    })
  }

  extractLastPage(cadena: string) {
    const partes = cadena.split('&');
    const valorDespuesDeIgual = partes[0];
    const parts2 = valorDespuesDeIgual.split('=')
    return parts2[1];
  }

  receiveMessageFromChild(page: number) {
    this.pageSelected = page;
    
    this.generalService.searchData(this.searchText, page).subscribe(data => {
      this.searchResult = data;
      this.lastPage = parseInt(this.extractLastPage(this.searchResult.links.last)!);
      this.persistenceService.setResultSearch(this.searchResult);
      this.persistenceService.setSearchText(this.searchText);
      this.persistenceService.setSearchPageNumberPage(this.pageSelected);
    });
  }
}
