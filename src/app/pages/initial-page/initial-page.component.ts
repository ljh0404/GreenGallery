import { Component } from '@angular/core';
import { Datum, RootObject } from 'src/app/interfaces/interfaces';
import { RootObject2 } from 'src/app/interfaces/plantInterface';
import { GeneralServiceService } from 'src/app/services/general-service.service';

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
  object!: RootObject;
  plantList: Datum[] = [];
  plantSelected!: RootObject2;
  first: number = 0;
  page: number = 0;
  nextIndex!: number;
  previousIndex!: number; 
  nextLink!: string;
  previousLink!: string;

  constructor(private generalService: GeneralServiceService){}
  
  ngOnInit(){
    this.getData();
  }

  getData(){
    this.generalService.obtenerDatos((this.page+1).toString()).subscribe((data) => {
      this.object = data;
      this.plantList = this.object.data;
      console.log(this.plantList);
    });
  }

  onClickPlant(plant: Datum){
    this.generalService.getSpecieData(plant.links.plant).subscribe((data)=> {
      this.plantSelected = data;
      this.visible = true;
      this.nextIndex = this.plantList.findIndex( element => element.id == plant.id) + 1 ;
      this.previousIndex = this.plantList.findIndex( element => element.id == plant.id) - 1 ;

      if (this.previousIndex == -1){
        this.previousIndex = this.plantList.length-1;
      }
      if (this.nextIndex == this.plantList.length){
        this.nextIndex = 0;
      }

      this.nextLink = this.plantList[this.nextIndex].links.plant;
      this.previousLink = this.plantList[this.previousIndex].links.plant;
    })
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.page = event.page;
    this.getData();
  }
}
