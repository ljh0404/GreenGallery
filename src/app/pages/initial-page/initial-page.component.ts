import { Component } from '@angular/core';
import { Datum, RootObject } from 'src/app/interfaces/interfaces';
import { RootObject2 } from 'src/app/interfaces/plantInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { PersistenceService } from 'src/app/services/persistence.service';
import { MessageService } from 'primeng/api';


interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent {

  visible: boolean = false;
  plantList!: RootObject;
  plantSelected!: RootObject2;
  first: number = 0;
  page!: number;
  nextIndex!: number;
  previousIndex!: number; 
  nextLink!: string;
  previousLink!: string;
  searchText!: string;
  initialButton: boolean = true;
  lastPage!: number;
  pageSelected!: number;
  isLoading: boolean = false;

  constructor(private generalService: GeneralServiceService, private persistenceService: PersistenceService, private messageService: MessageService){}
  
  ngOnInit(){
    // this.generalService.claimAuthorization('https://greengallery-b9ad4.web.app/', '')
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    if (this.persistenceService.getInitialPage()){
      this.getPersistenceData();  
    }
    else{
      this.getData();
    }
  }

  getData(){
    this.isLoading = true
    this.generalService.obtenerDatos(1).subscribe(
      (data) => {
        this.plantList = data;
        this.lastPage = parseInt(this.extractLastPage(this.plantList.links.last)!);
        this.pageSelected = 1;
        this.persistenceService.setInitialNumberPage(this.pageSelected);
        this.persistenceService.setInitialPage(this.plantList);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        this.isLoading = false;
      });
  }

  getPersistenceData(){
    this.plantList = this.persistenceService.getInitialPage();
    this.lastPage = parseInt(this.extractLastPage(this.plantList.links.last)!);
    this.pageSelected = this.persistenceService.getInitialNumberPage();
  }

  onClickPlant(plant: Datum){
    this.generalService.getSpecieData(plant.links.plant).subscribe((data)=> {
      this.plantSelected = data;
      this.visible = true;
      this.nextIndex = this.plantList?.data.findIndex(element => element.id == plant.id) + 1 ;
      this.previousIndex = this.plantList?.data.findIndex(element => element.id == plant.id) - 1 ;

      if (this.previousIndex == -1){
        this.previousIndex = this.plantList?.data.length - 1;
      }
      if (this.nextIndex == this.plantList?.data.length){
        this.nextIndex = 0;
      }

      this.nextLink = this.plantList?.data[this.nextIndex].links.plant;
      this.previousLink = this.plantList?.data[this.previousIndex].links.plant;
    })
  }

  // onPageChange(event: any) {
  //   this.first = event.first;
  //   this.page = event.page;
  //   this.getData();
  // }

  addFavorites(plant: Datum){
    this.generalService.addFavorites(plant);
    this.messageService.add({ severity: 'success', summary: 'Exito', detail: 'Agregado a Favoritos' });
  }

  extractLastPage(cadena: string) {
    const partes = cadena.split('=');
    const valorDespuesDeIgual = partes[1];
    return valorDespuesDeIgual;
  }

  receiveMessageFromChild(page: number) {
    this.pageSelected = page;
    this.persistenceService.setInitialNumberPage(this.pageSelected);
    this.isLoading = true
    this.generalService.obtenerDatos(page).subscribe((data) => {
      this.plantList = data;
      this.isLoading = false;
      this.persistenceService.setInitialPage(this.plantList);
    });
  }
}
